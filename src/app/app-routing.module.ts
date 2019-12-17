import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main-menu', pathMatch: 'full' },
  { path: 'main-menu', loadChildren: () => import('./pages/main-menu/main-menu.module').then(m => m.MainMenuPageModule)},
  { path: 'rulesets', loadChildren: './pages/rulesets/rulesets.module#RulesetsPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'ruleset-list', loadChildren: './pages/ruleset-list/ruleset-list.module#RulesetListPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
