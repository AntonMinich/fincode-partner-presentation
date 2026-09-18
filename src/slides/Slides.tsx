import { Icon } from '../components/Icon';
import { UiMockup } from '../components/UiMockup';
import { benefits, launchSteps, processSteps, riskScenarios } from '../data/presentation';

export function HeroSlide() {
  return <div className="hero-layout"><div className="hero-copy"><p className="eyebrow">Кабинет партнёра</p><h1 id="slide-title-1">Способ <em>продолжить продажу,</em><br />когда клиент не готов оплатить всю сумму сразу.</h1><p className="lead">Лизинг прямо в процессе продажи — дополнительный сценарий покупки для вашего магазина.</p><div className="hero-chip">Больше возможностей для ваших клиентов</div></div><div className="hero-visual" aria-hidden="true"><div className="device device-main"><div className="device-bar"><span /><span /><span /></div><div className="mini-brand">fin<span>code</span></div><div className="device-title">Заявки</div><div className="device-tabs"><b>Все заявки</b><span>Новые</span><span>В работе</span></div><div className="mini-rows">{['Одобрена','В работе','Новая','Черновик'].map((item, i) => <div key={item}><i /><span>00012345{i + 6}</span><b>{item}</b></div>)}</div></div><div className="device device-small"><div className="small-screen" /></div><div className="product product-a" /><div className="product product-b" /><div className="product product-c" /></div></div>;
}

export function BarrierSlide() {
  return <div className="content-layout"><div><p className="eyebrow">Когда цена останавливает покупку</p><h2 id="slide-title-2">Без альтернативы клиент может:</h2></div><div className="scenario-grid">{riskScenarios.map((item) => <article className="scenario-card" key={item.title}><div className="scenario-icon"><Icon name={item.icon} size={36} /></div><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div><div className="insight"><span>Цена стала барьером</span><Icon name="arrow-right" /><strong>Нужен ещё один сценарий покупки</strong><p>Не скидка. Не давление. Дополнительный способ оплаты.</p></div></div>;
}

export function ProcessSlide() {
  return <div className="content-layout"><div><p className="eyebrow">Продавец предлагает лизинг — Fincode ведёт сделку</p><h2 id="slide-title-3">Кабинет помогает запустить заявку и видеть, что происходит дальше.</h2></div><div className="process-grid">{processSteps.map((step, index) => <article className="process-card" key={step.number}><span>{step.number}</span><h3>{step.title}</h3>{index === 0 && <div className="process-options"><p><b>В магазине</b>Продавец заполняет заявку вместе с клиентом</p><p><b>Удалённо</b>Продавец формирует товар и передаёт клиенту ссылку для заполнения*</p></div>}</article>)}</div><p className="footnote">* Функция удалённого сценария — по материалам проекта; перед внешней рассылкой сверить с текущей версией кабинета.</p></div>;
}

export function BenefitsSlide() {
  return <div className="content-layout"><div><p className="eyebrow">Что получает магазин</p><h2 id="slide-title-4">Ценность кабинета — в продаже, контроле и понятном сопровождении.</h2></div><div className="benefit-grid">{benefits.map((item) => <article className="benefit-card" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><blockquote>Главная идея: не «гарантируем рост продаж», а сохраняем возможность продолжить сделку.</blockquote></div>;
}

export function ContextSlide() {
  const facts = ['заявки и их статусы', 'данные по сделке', 'историю работы', 'вознаграждение партнёра'];
  return <div className="context-layout"><div><p className="eyebrow">В кабинете — весь рабочий контекст по заявке</p><h2 id="slide-title-5">Без сложной финансовой системы для продавца.</h2><div className="fact-list"><p>Продавцу важно видеть:</p>{facts.map((fact) => <div key={fact}><Icon name="check" size={18} />{fact}</div>)}</div></div><UiMockup /></div>;
}

export function CtaSlide() {
  return <div className="content-layout cta-layout"><div><p className="eyebrow">Подключимся и запустим продажи</p><h2 id="slide-title-6">Следующий шаг — обсудить условия и процесс именно для вашего магазина.</h2></div><div className="launch-grid">{launchSteps.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><div className="contact-card"><p>Короткая встреча → условия → подключение → первые заявки</p><h3>Обсудим подключение?</h3><strong>[Имя менеджера]</strong><span>[Телефон] · [E-mail]</span><small>fincode.by/partners</small></div></div>;
}
