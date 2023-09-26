import "./global.css";
import s from "./style.module.css";

export function App() {
  return (
    <div className={s.main_container}>
      <div className={s.header}>Titre</div>
      <div className={s.tv_show_detail}>Détails</div>
      <div className={s.recommendations}>Recommandations</div>
    </div>
  );
}
