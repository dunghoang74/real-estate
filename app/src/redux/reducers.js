import Auth from './auth/reducer';
import App from './app/reducer';
import Mails from './mail/reducer';
import Calendar from './calendar/reducer';
import Box from './box/reducer';
import Notes from './notes/reducer';
import Todos from './todos/reducer';
import Contacts from './contacts/reducer';
import Cards from './card/reducer';
import Chat from './chat/reducers';
import DynamicChartComponent from './dynamicEchart/reducer';
import Ecommerce from './ecommerce/reducer';
import ThemeSwitcher from './themeSwitcher/reducer';
import Invoices from './invoice/reducer';
import LanguageSwitcher from './languageSwitcher/reducer';
import YoutubeSearch from './youtubeSearch/reducers';
import DevReducers from '../customApp/redux/reducers';
import ModalStatus from './modal/reducer';
import User from './user/reducer'
import PageConfigReducer  from './pageConfig/reducer'

export default {
  Auth,
  App,
  ThemeSwitcher,
  LanguageSwitcher,
  Mails,
  Calendar,
  Box,
  Notes,
  Todos,
  Contacts,
  Cards,
  Chat,
  DynamicChartComponent,
  Ecommerce,
  Invoices,
  YoutubeSearch,
  ModalStatus,
  User,
  PageConfigReducer,
  ...DevReducers
};
