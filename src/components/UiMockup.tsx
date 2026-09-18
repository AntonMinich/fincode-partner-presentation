import { applications } from '../data/presentation';
import { Icon } from './Icon';

export function UiMockup() {
  return (
    <div className="ui-mockup" aria-label="Схематичное изображение заявок на лизинг">
      <div className="mockup-top"><strong>Заявки на лизинг</strong><button className="new-application"><Icon name="plus" size={15} /> Новая заявка</button></div>
      <div className="mockup-table" role="table" aria-label="Список заявок">
        <div className="mockup-row mockup-head" role="row"><span>ID</span><span>Клиент / товар</span><span>Сумма</span><span>Статус</span></div>
        {applications.map((application) => (
          <div className="mockup-row" role="row" key={application.id}>
            <strong>{application.id}</strong><span>{application.product}</span><span>{application.amount}</span><span className={`status ${application.tone}`}>{application.status}</span>
          </div>
        ))}
      </div>
      <p className="mockup-note">Схематичное изображение интерфейса</p>
    </div>
  );
}
