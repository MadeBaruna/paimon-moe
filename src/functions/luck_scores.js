// Yohan1044 Genshin luckiness functions. Binomial and arbitrary discrete PDFs. Javascript. 11/28/22

/* library of two Genshin-centric prabability functions:
1) fifty_fifty_luckiness( flips, wins, prob )
    flips = Non-negative Integer, number of 50:50s encountered
    wins = Non-negative Integer not greater than flips, the number of 50:50s won
    prob = Double in the interval [0,1], odds of winning an individual 50:50.
      This should be "0.75" for the weapon banner 5 stars and "0.5" otherwise
Asks: given F 50:50 attempts, what percentile of people will win fewer than W of them?

2) pity_luckiness( wishes, items, pity, item_type)
    wishes = Non-negative Integer, total number of wishes on the banner
    items = Non-negative Integer, total number of items of interest won
    pity = Non-negative Integer, the current pity for the current item type
    item_type = String from {"4STAR","5STAR_char","5STAR_standard","5STAR_weapon"}
Asks: What percentile of people of who win I+1 items take more wishes than
    the possible numbers of wishes it'll take to win the I+1 item given that
    in the first W wishes, I items were won with P pity remaining.

3) no_pity_luckiness( wishes, items, item_type)
    wishes = Non-negative Integer, number of wishes used up until getting the last item
            DO NOT include wishes currently counting towards pity.
    items = Non-negative Integer, total number of items of interest won
    item_type = String from {"4STAR","5STAR_char","5STAR_standard","5STAR_weapon"}
Asks: What percentile of people that won I items did it in fewer than W wishes?

All functions compute "luckiness" - a theoretical percentile of success given
the number of attempts made.
The functions have a lot in common conceptually, but are computed very differently.
The first uses properties of the binomial distribution to be fast and more numerically stable.
The second was written for general discrete distributions and is conditioned to the current pity
    but pulls low pity scores toward the median because its projecting when the next item might be won
The third was also for general discrete distributions, but does not use pity at all.
*/

function fifty_fifty_luckiness( flips, wins, prob ){
    if (typeof flips !== 'number' || typeof wins !== 'number' || typeof prob !== 'number'
            || wins>flips || flips<0 || wins<0 || prob>1.0 || prob<0.0
            || !Number.isInteger(flips) || !Number.isInteger(wins)){
        alert("Bad call to fifty_fifty_luckiness()")
    }
    return average_binomial_cdf(flips, wins, prob)
}

function pity_luckiness( wishes, items, pity, item_type){
    let pdf = get_pdf(item_type);
    if (typeof wishes !== 'number' || typeof items !== 'number' || typeof pity !== 'number'
            || !Number.isInteger(wishes) || !Number.isInteger(items) || !Number.isInteger(pity)
            || (items+pity)>wishes || items<0 || wishes<0 || pity<0
            || wishes>(items*pdf.length+pity) || pity>(pdf.length-1)){
        alert("Bad call to pity_luckiness()")

    }
    return compute_pity_luck(wishes, items, pity, pdf)
}

function no_pity_luckiness( wishes, items, item_type){
    let pdf = get_pdf(item_type);
    if (typeof wishes !== 'number' || typeof items !== 'number'
            || !Number.isInteger(wishes) || !Number.isInteger(items)
            || items>wishes || items<0 || wishes<0 || wishes>(items*pdf.length)){
        alert("Bad call to no_pity_luckiness()")

    }
    if(items == 0) return 0.5;
    return compute_no_pity_luck(wishes, items, pdf)
}

const CHAR_5_STAR_PDF =
[0.006000000,0.0059640000,0.0059282160,0.0058926467,0.0058572908,0.0058221471,0.0057872142,0.0057524909,0.0057179760,0.0056836681,
0.0056495661,0.0056156687,0.0055819747,0.0055484828,0.0055151919,0.0054821008,0.0054492082,0.0054165129,0.0053840139,0.0053517098,
0.0053195995,0.0052876819,0.0052559558,0.0052244201,0.0051930736,0.0051619151,0.0051309436,0.0051001580,0.0050695570,0.0050391397,
0.0050089049,0.0049788514,0.0049489783,0.0049192844,0.0048897687,0.0048604301,0.0048312675,0.0048022799,0.0047734663,0.0047448255,
0.0047163565,0.0046880584,0.0046599300,0.0046319704,0.0046041786,0.0045765535,0.0045490942,0.0045217997,0.0044946689,0.0044677009,
0.0044408946,0.0044142493,0.0043877638,0.0043614372,0.0043352686,0.0043092570,0.0042834014,0.0042577010,0.0042321548,0.0042067619,
0.0041815213,0.0041564322,0.0041314936,0.0041067046,0.0040820644,0.0040575720,0.0040332266,0.0040090272,0.0039849731,0.0039610632,
0.0039372968,0.0039136731,0.0038901910,0.0400648612,0.0715218639,0.0929890003,0.1014700945,0.0970727638,0.0827852436,0.0632963180,
0.0433818076,0.0265432828,0.0143902042,0.0068369257,0.0028033770,0.0008970806,0.0002870658,0.0000918611,0.0000293955,0.0000138337];
const WEAP_5_STAR_PDF =
[0.007000000,0.0069510000,0.0069023430,0.0068540266,0.0068060484,0.0067584061,0.0067110972,0.0066641196,0.0066174707,0.0065711484,
0.0065251504,0.0064794743,0.0064341180,0.0063890792,0.0063443556,0.0062999451,0.0062558455,0.0062120546,0.0061685702,0.0061253902,
0.0060825125,0.0060399349,0.0059976554,0.0059556718,0.0059139821,0.0058725842,0.0058314761,0.0057906558,0.0057501212,0.0057098703,
0.0056699012,0.0056302119,0.0055908005,0.0055516649,0.0055128032,0.0054742136,0.0054358941,0.0053978428,0.0053600579,0.0053225375,
0.0052852798,0.0052482828,0.0052115448,0.0051750640,0.0051388386,0.0051028667,0.0050671466,0.0050316766,0.0049964549,0.0049614797,
0.0049267493,0.0048922621,0.0048580162,0.0048240101,0.0047902420,0.0047567104,0.0047234134,0.0046903495,0.0046575170,0.0046249144,
0.0045925400,0.0045603922,0.0482252596,0.0850696787,0.1076753736,0.1125230406,0.1011536206,0.0792706624,0.0542226109,0.0321762061,
0.0163613543,0.0069927070,0.0024402750,0.0006100687,0.0001525172,0.0000381293,0.0000095323,0.0000023831,0.0000005958,0.0000001987];
//I created this distribution. 4 star pities would benefit from more representative numbers.
const FOUR_STAR_PDF =
[0.057000000,0.0537510000,0.0506871930,0.0477980230,0.0450735357,0.0425043442,0.0400815965,0.0377969455,0.3356425196,0.2896648425];

function get_pdf( item_type ){
    switch(item_type) {
        case "5STAR_char":
        case "5STAR_standard":
            return CHAR_5_STAR_PDF;
        case "5STAR_weapon":
            return WEAP_5_STAR_PDF;
        case "4STAR":
            return FOUR_STAR_PDF;
        default:
            alert("Bad item_type in luckiness get_pdf function")
    }
}

function binomial_coef_ln(n, k) {
    let coef = 0;
    for (let x = n-k+1; x <= n; x++) coef += Math.log(x);
    for (x = 1; x <= k; x++) coef -= Math.log(x);
    return coef;
}

//Using log space prevents overflow with taking large factorials
function binomial_pdf(n, k, p) {
    let coef = binomial_coef_ln(n, k);
    for (let x = 0; x < k; x++) coef += Math.log(p);
    for (let x = k; x < n; x++) coef += Math.log(1-p);
    return Math.exp(coef);
}

function binomial_cdf_first_k_elements(n, k, p) {
    let sum = 0;
    for (let x = 0; x < k; x++) sum += binomial_pdf(n, x, p);
    return sum;
}

function average_binomial_cdf(n, k, p) {
    let output = binomial_cdf_first_k_elements(n, k, p);
    output += binomial_pdf(n, k, p)/2;
    return output;
}

// Convolution of one dimentional arrays A and B.
// A must be shorter or equal length to B.
function convolve_1d(a, b) {
    if(a.length > b.length) alert("Bad Call to convolve_1d luckiness function");
    let output = new Array(a.length + b.length - 1)
    for(let i = 0; i < output.length; i++){
        output[i] = 0;
        let initial_index = Math.max(0, i-b.length+1);
        for(let x = initial_index; x < Math.min(a.length, i-initial_index+1); x++){
          output[i] += a[x] * b[i-x];
        }
    }
    return output;
}

// Uses binary decomposition for consecutive 1D auto convolutions
function convolve_n_times(array, n){
    let power_two_array = array;
    let remainder = n;
    let output = [1.0];
    while(remainder > 0){
        if(remainder % 2 > 0 ){
            output = convolve_1d(output, power_two_array);
            remainder -= 1;
        }
        if(remainder == 0) break;
        remainder /= 2;
        power_two_array = convolve_1d(power_two_array, power_two_array);
    }
    return output;
}

function conditioned_pdf_slice(pdf, drop){
    output = pdf.slice(drop)
    let sum = 0;
    for(let i = 0; i < output.length; i++) sum += output[i];
    for(let i = 0; i < output.length; i++) output[i] /= sum;
    return output;
}

function compute_pity_luck(wishes, items, pity, pdf){
    let population_pdf = convolve_n_times(pdf,items+1);
    let conditional_pdf = conditioned_pdf_slice(pdf, pity)

    //first index of population_pdf corresponds to I+1 wishes
    //first index of conditional_pdf corresponds to W+1 wishes
    //Compare the outcomes of complete sampling each PDF
    let output = 0;
    let population_cdf = 0
    for(let i = 0; i < wishes-items; i++) population_cdf += population_pdf[i];
    for(let i = 0; i < conditional_pdf.length; i++){
      output += conditional_pdf[i] * ( population_cdf + population_pdf[wishes-items+i]/2);
      population_cdf +=  population_pdf[wishes-items+i];
    }
    return 1-output;
}

function compute_no_pity_luck(wishes, items, pdf){
    let convolved_pdf = convolve_n_times(pdf,items);
    //first index of convolved_pdf corresponds to I wishes
    let convolved_cdf = 0
    for(let i = 0; i < wishes-items; i++) convolved_cdf += convolved_pdf[i];
    convolved_cdf += convolved_pdf[wishes-items]/2
    return 1-convolved_cdf;
}
