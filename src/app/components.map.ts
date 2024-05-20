import { CashAccHeaderComponent } from "./components/cash-acc-header/cash-acc-header.component";
import { CashAccMainCardComponent } from "./components/cash-acc-main-card/cash-acc-main-card.component";
import { CashAccSummaryCardComponent } from "./components/cash-acc-summary-card/cash-acc-summary-card.component";
import { HomeHeaderComponent } from "./components/home-header/home-header.component";
import { HomeMainCardComponent } from "./components/home-main-card/home-main-card.component";
import { HomeQuickAccessCardComponent } from "./components/home-quick-access-card/home-quick-access-card.component";
import { HomeSummaryCardComponent } from "./components/home-summary-card/home-summary-card.component";

export const COMPONENT_MAP: any = {
    'homeHeaderComponent': HomeHeaderComponent,
    'homeSummaryCardComponent': HomeSummaryCardComponent,
    'homeQuickAccessCard': HomeQuickAccessCardComponent,
    'homeMainCardComponent': HomeMainCardComponent,
    'cashAccMainCardComponent': CashAccMainCardComponent,
    'cashAccSummaryCardComponent': CashAccSummaryCardComponent,
    "cashAccHeaderComponent": CashAccHeaderComponent
}