(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();document.querySelector("#content").insertAdjacentHTML("afterbegin",`
      <div class="page title">
        <div class="title__h1 behindBack">
            <h1>РЕКОМЕНДАЦИИ</h1>
            <h1>ПО ПОДГОТОВКЕ К ОГЭ</h1>
            <h1></h1>
        </div>
            
        <div class="title__img">
            <img src="./page-1-02.jpg">
        </div>
      </div>

      <section data-page="infoAboutExam">

        <div class="section__title">
          <h2>Влияет ли ОГЭ на аттестат</h2>
        </div>

        <div class="section__content">
          <div>
              <div>Даже если все годовые отметки будут пятёрки, но на экзамене хотя бы по одному предмету будет оценка неудовлетворительно, аттестат не выдают. С другой стороны, как раз когда заработанные за год отметки хорошие, тройка за ОГЭ, хотя и не идёт в аттестат, может подпортить общую картину.</div>
              <div class="section__content-hint">Результат, полученный на ОГЭ по математике, русскому языку и двум предметам по выбору, напрямую влияет на балл, который пойдёт в аттестат.</div>
              <div>Итоговая оценка для аттестата за четыре предмета, которые ученик 9-го класса сдаёт на ОГЭ, считается как среднее арифметическое годовой и полученной на экзамене оценок. Дробный результат по математическим правилам округляется до целого числа.</div>
              <div>Отметки по предметам, которые не сдаются на ОГЭ, выставляются в аттестат по годовым оценкам.</div>
          </div>
        </div>

      </section>

      <section>

        <div class="section__title">
          <h2>Влияет ли ОГЭ на поступление</h2>
        </div>

        <div class="section__content">
          <div>
              <div>При поступлении на большинство программ ссузов нужно пройти конкурс аттестатов. Что это такое? Считается средний балл аттестата, то есть складываются все оценки, и полученное значение делится на количество предметов. Но некоторые учебные заведения могут учитывать среднее значение только по тем предметам, которые являются профильными для выбранной специальности.</div>
          </div>
        </div>

      </section>

      <section>

        <div class="section__title">
          <h2>Определиться с направлением</h2>
        </div>

        <div class="section__content">
          <div>
            <div>К моменту окончания основной школы самое время определиться, кем быть, чем заниматься, обозначить свою сферу интересов. Придётся решить — оставаться ли в школе ещё два года, перейти в учреждение среднего специального или профессионального образования или же уже начать работать. Определиться с будущей профессией трудно. Некоторых интересует сразу несколько сфер, другим кажется, что не нравится вообще ничего.</div>
            <div>‍Однако если уже в 9-м классе наметить свою дальнейшую образовательную траекторию, выбрать в качестве дополнительных предметов те, которые вам понадобятся в будущем, начинать подготовку заранее, то в конце концов ваша дальновидность и планирование сыграют на руку и дадут шанс поступить именно на ту специальность, о которой вы мечтаете.</div>
          </div>
        </div>

      </section>
`);let s=`
<section data-page="recomend" class="section recomend">

<div class="section__title">
  <h2>Рекомендации по подготовке к ОГЭ</h2>
</div>

<div class="section__content">
  <div>
    <div>Волнения и тревожности во время подготовки к экзамену не избежит даже самый умный в классе ученик, но справиться с этим реально. Тренируйте стрессоустойчивость и давайте отпор давлению со стороны. Вот несколько рекомендаций по подготовке:</div>
    <ul>
      <li>
        <div data-recomend><div>Составьте план.</div><img src="./arrow.png"></div>
        <div class="section-recomend">Если вы уже нашли темы для повторения, можно спланировать, как вы будете готовиться к сдаче ОГЭ в этом году. Сначала посчитайте, сколько недель у вас осталось до экзамена. Для этого можно свериться с официальным расписанием на 2022 год на сайте Рособрнадзора. Затем соберите материалы по вашим слабым темам и составьте график, по которому будете работать. Распределите темы по дням недели, но не перегружайте себя: важно помнить об отдыхе, чтобы мозг лучше усваивал новую информацию.</div>
      </li>

      <li>
        <div data-recomend><div>Режим сна.</div><img src="./arrow.png"></div>
        <div class="section-recomend">Не устраивайте ночные марафоны по зубрёжке. Возьмите за правило ложиться спать и просыпаться в одно и то же время.</div>
      </li>
      
      <li>
        <div data-recomend><div>Научитесь заполнять бланк ответов.</div><img src="./arrow.png"></div>
        <div class="section-recomend">Чтобы не потерять баллы из-за неправильного оформления, заранее изучите правила работы с бланком. Если этого не сделать, лишняя запятая, пропущенная клетка или обыкновенная дробь, которую вы забыли перевести в десятичную, может повлиять на оценку.</div>
      </li>

      <li>
        <div data-recomend><div>Спорт.</div><img src="./arrow.png"></div>
        <div class="section-recomend">Посещайте тренировки, устраивайте прогулки на свежем воздухе. Физическая активность позволяет мозгу перезагрузиться и работать эффективнее.</div>
      </li>

      <li>
        <div data-recomend><div>Питание.</div><img src="./arrow.png"></div>
        <div class="section-recomend">Разнообразный рацион, полный сложных углеводов, белков и клетчатки, поможет вовремя восстанавливать силы и быть в ресурсном состоянии.</div>
      </li>

      <li>
        <div data-recomend><div>Занятия и подготовка.</div><img src="./arrow.png"></div>
        <div class="section-recomend">Занимайтесь практикой, прорешивайте пробные варианты и смотрите видеоролики, помогающие решать задания из сборника ОГЭ. Не нужно волноваться и торопиться запомнить как можно больше, постепенно занимайтесь и учитесь.</div>
      </li>

      <li>
        <div data-recomend><div>Эмоции.</div><img src="./arrow.png"></div>
        <div class="section-recomend">Нужно всегда давать выход своим переживаниям, так как зажатые чувства могут привести к ухудшению самочувствия, головным болям и бессоннице.</div>
      </li>

      <li>
        <div data-recomend><div>Перед экзаменом</div><img src="./arrow.png"></div>
        <div class="section-recomend">хорошо поспите и покушайте, чтобы не чувствовать усталость и недомогания на ОГЭ. Они сильно мешают при выполнении заданий, что приведёт к ещё большему волнению.</div>
      </li>
    </ul>
    
  </div>
</div>

</section>

<section class="section-end">
        <div style="text-align: center; padding: 10px 0;">
            Стресс и тревога всегда будут присутствовать где-то рядом во время подготовки, но нужно уметь держать их на расстоянии и находить в слабостях возможности для развития.
        </div>
    </section>
`;document.querySelector("#content").insertAdjacentHTML("beforeend",s);$(".section-recomend").slideUp(0);document.querySelectorAll("[data-recomend]").forEach(t=>{t.addEventListener("click",function(d){const n=d.target.closest("li").querySelector(".section-recomend"),o=d.target.closest("li").querySelector("img");n.style.display==="none"?($(n).slideDown(200),o.style.rotate="180deg"):($(n).slideUp(200),o.style.rotate="0deg")})});window.addEventListener("click",function(t){t.target.hasAttribute("data-nav")&&document.querySelector(`[data-page=${t.target.dataset.nav}]`).scrollIntoView({behavior:"smooth"})});
