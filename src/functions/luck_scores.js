// Yohan1044 luckiness functions. Binomial and arbitrary discrete PDFs. Javascript. 11/28/22

// Small library of two functions: 1) average_binomial_cdf() 2) average_pity_luck_percentile()
// The two are similar, but the former uses properties of the binomial distribution to be faster
// and more numerically stable. The latter was written for general discrete distributions.
// The latter could be used to compute the former with the relation:
//      average_binomial_cdf(F,W,P)) = 1 - average_pity_luck_percentile(F,F+W,[1-P, P]))
// Both compute "luckiness" - a theoretical percentile of successes given attempts

const char_5_star_PDF =
[0.00600000000,0.005964000000,0.005928216000,0.005892646704,0.005857290824,0.0058221470790,0.0057872141960,0.00575249091100,0.00571797596600,0.00568366811,
0.005649566101,0.005615668705,0.005581974692,0.005548482844,0.005515191947,0.0054821007960,0.0054492081910,0.00541651294200,0.00538401386400,0.005351709781,
0.005319599522,0.005287681925,0.005255955833,0.005224420098,0.005193073578,0.0051619151360,0.0051309436460,0.00510015798400,0.00506955703600,0.005039139694,
0.005008904855,0.004978851426,0.004948978318,0.004919284448,0.004889768741,0.0048604301290,0.0048312675480,0.00480227994300,0.00477346626300,0.004744825465,
0.004716356513,0.004688058373,0.004659930023,0.004631970443,0.004604178620,0.0045765535490,0.0045490942270,0.00452179966200,0.00449466886400,0.004467700851,
0.004440894646,0.004414249278,0.004387763782,0.004361437200,0.004335268576,0.0043092569650,0.0042834014230,0.00425770101500,0.00423215480900,0.00420676188,
0.004181521308,0.004156432181,0.004131493587,0.004106704626,0.004082064398,0.0040575720120,0.0040332265800,0.00400902722000,0.00398497305700,0.003961063219,
0.003937296839,0.003913673058,0.003890191020,0.040064861190,0.071521863940,0.0929890002900,0.1014700945000,0.09707276379000,0.08278524358000,0.06329631805,
0.043381807580,0.026543282830,0.014390204240,0.006836925739,0.002803377010,0.0008970806431,0.0002870658058,0.00009186105786,0.00002939553851,0.00001383319459]
const weap_5_star_PDF =
[0.00700000000,0.006951000000,0.006902343000,0.0068540265990,0.0068060484130,0.00675840607400,0.006711097231000,0.006664119551000,0.0066174707140000,0.006571148419,
0.006525150380,0.006479474327,0.006434118007,0.0063890791810,0.0063443556270,0.00629994513700,0.006255845521000,0.006212054603000,0.0061685702210000,0.006125390229,
0.006082512497,0.006039934910,0.005997655366,0.0059556717780,0.0059139820760,0.00587258420100,0.005831476112000,0.005790655779000,0.0057501211880000,0.00570987034,
0.005669901248,0.005630211939,0.005590800455,0.0055516648520,0.0055128031980,0.00547421357600,0.005435894081000,0.005397842822000,0.0053600579220000,0.005322537517,
0.005285279754,0.005248282796,0.005211544817,0.0051750640030,0.0051388385550,0.00510286668500,0.005067146618000,0.005031676592000,0.0049964548560000,0.004961479672,
0.004926749314,0.004892262069,0.004858016234,0.0048240101210,0.0047902420500,0.00475671035500,0.004723413383000,0.004690349489000,0.0046575170430000,0.004624914424,
0.004592540023,0.004560392242,0.048225259580,0.0850696786800,0.1076753736000,0.11252304060000,0.101153620600000,0.079270662440000,0.0542226109500000,0.03217620614,
0.016361354270,0.006992707006,0.002440274967,0.0006100687418,0.0001525171855,0.00003812929636,0.000009532324091,0.000002383081023,0.0000005957702557,0.0000001985900852];
//I made this one up. 4 star pities needs representative numbers.
const four_star_PDF =
[0.0570000000,0.05375100000,0.05068719300,0.04779802300,0.04507353569,0.04250434415,.04008159654,0.03779694553,0.33564251964,0.28966484240];

//Log space prevents overflow with taking large factorials
function binomial_coef_ln(n, k) {
    let unused = Math.log(5);
    let coef = 0;
    for (let x = n-k+1; x <= n; x++) coef += Math.log(x);
    for (x = 1; x <= k; x++) coef -= Math.log(x);
    return coef;
}

function binomial_pdf(n,k,p) {
    let coef = binomial_coef_ln(n,k);
    for (let x = 0; x < k; x++) coef += Math.log(p);
    for (let x = k; x < n; x++) coef += Math.log(1-p);
    return Math.exp(coef);
}

function binomial_cdf_first_k_elements(n,k,p) {
    if ((typeof n !== 'number') || (typeof k !== 'number') || (typeof p !== 'number')
            || (k>n+1) || (n<0) || (k<0) || (p>1) || (p<0))
        return false;
    let sum = 0;
    for (let x = 0; x < k; x++) sum += binomial_pdf(n,x,p);
    return sum;
}


/*  "average_binomial_cdf()"
Provides a theoretical "luckiness" percentile based on number of 50/50 wins.
Users should score uniformly distributed with scores from 0 to 1. Higher is luckier

var num_fifty = 3000; //Nonnegative Integer
var num_fifty_won = 1530; //Nonnegative Integer
var prob_win = 0.50; // Probability (0,1). Use 0.5 for characters, 0.75 for weapons
alert(average_binomial_cdf(num_fifty,num_fifty_won,prob_win)) */
function average_binomial_cdf(flips,wins,prob) {
    let output = binomial_cdf_first_k_elements(flips,wins,prob);
    output += binomial_pdf(flips,wins,prob)/2;
    return output;
}

// Convolution of one dimentional arrays A and B.
// A must be shorter or equal length to B.
function convolve_1d(a,b) {
    if(a.length > b.length) return false;
    let output = new Array(a.length + b.length -1)
    for(let i = 0; i < output.length; i++){
        output[i] = 0;
        let initial_index = Math.max(0,i-b.length+1);
        for(let x = initial_index; x < Math.min(a.length,i-initial_index+1); x++){
          output[i] += a[x]*b[i-x];
        }
    }
    return output;
}

// Uses binary decomposition for consecutive 1D auto convolutions
function convolve_n_times(array, n){
    if ((typeof n !== 'number') || (n<=0))
        return false;
    let power_two_array = array;
    let remainder = n;
    let output = [1.0];
    while(remainder > 0){
        if(remainder % 2 > 0 ){
            output = convolve_1d(output,power_two_array);
            remainder -= 1;
        }
        if(remainder == 0) break;
        remainder /= 2;
        power_two_array = convolve_1d(power_two_array,power_two_array);
    }
    return output;
}

/*  "average_pity_luck_percentile()"
Provides a theoretical "luckiness" percentile for total wishes vs. total items won
Becomes computationally non-trivial with a few hunderd 5 stars items
The pity luck posterior could be conditioned on the current pity count, but in this version, the current pity is ignored.
Users should score uniformly distributed with scores from 0 to 1. Higher is luckier

var num_items = 100; // Positive Integer (ie. 5 star items off standardANDcharacter banner or 4 stars items on weapon banner) Must share same PDF
var num_wishes = 6200; //Positive Integer (exclude wishes past the last item win ie. exclude pity)
alert(average_pity_luck_percentile(num_items,num_wishes,char_5_star_PDF)) */
function average_pity_luck_percentile(items,wishes,single_pdf){
    let multi_pdf = convolve_n_times(single_pdf,items);
    let output = 0;
    for(let i = 0; i < wishes-items; i++) output += multi_pdf[i];
    output += multi_pdf[wishes-items]/2;
    return 1-output; //More wishes is bad
}
