import IndexComponent from "./components/index/index_component";
import SettingsComponent from "./components/settings/settings_component";

const routes = [
  {path: '/', component: IndexComponent},
  {path: '/settings', component: SettingsComponent}
];

export default routes;
