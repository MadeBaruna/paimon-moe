import * as data from './timelines/timeline';
import * as data_ja from './timelines/timeline_ja'

export const languages = [
  { id: 'zh', label: '中文(简体)', eventdata: data.eventsData },
  { id: 'tw', label: '中文(繁體)', eventdata: data.eventsData },
  { id: 'en', label: 'English', eventdata: data.eventsData },
  { id: 'fr', label: 'Français', eventdata: data.eventsData },
  { id: 'de', label: 'Deutsch', eventdata: data.eventsData },
  { id: 'ja', label: '日本語', eventdata: data_ja.eventsData },
  { id: 'ko', label: '한국어', eventdata: data.eventsData },
  { id: 'th', label: 'ภาษาไทย', eventdata: data.eventsData },
  { id: 'vi', label: 'Tiếng Việt', eventdata: data.eventsData },
  { id: 'id', label: 'Indonesia', eventdata: data.eventsData },
  { id: 'es', label: 'Español', eventdata: data.eventsData },
  { id: 'pt', label: 'Português', eventdata: data.eventsData },
  { id: 'ru', label: 'Русский', eventdata: data.eventsData },
  { id: 'tr', label: 'Türkçe', eventdata: data.eventsData },
  { id: 'it', label: 'Italiano', eventdata: data.eventsData },
];