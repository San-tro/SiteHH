﻿import React, { Component } from 'react';
import './stle.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
      return (
          <div>
          
<div id="app" > 


                      


    <div  id="main-content" class="container">
        <div class="row">
            <div class="col-md-3 " id="filter" >
                <div class="filter-sidebar filt" >
                    <div class="row card-body py-2 mb-3  up">
                        <h4><i class="fa fa-car "></i> Фильтры </h4>
                    </div>
                    <form method="post" action="http://coursach/public/home">
                        <input type="hidden" name="_token" value="wRsI4TfowuQu36DyB6AzHBUMAYpEVAjOAlr2BPv8" />
                        <div class="form-group">
                            <select class="form-control" id="conditionsselect1" name="name">
                                <option value="" disabled selected>Профессия</option>
                                <option value="Верстальщик">Верстальщик </option>
                                <option value="Веб-дизайнер">Веб-дизайнер</option>
                                <option value="Тестировщик">Тестировщик</option>
                                <option value="Системный администратор">Системный администратор</option>
                                <option value="Программист">Программист</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <select class="form-control" id="conditionsselect2" name="experience">
                                <option value="" disabled selected>Стаж работы</option>
                                <option value="Нет опыта">Нет опыта</option>
                                <option value="От 1 года до 3 лет">От 1 года до 3 лет</option>
                                <option value="От 3 до 6 лет">От 3 до 6 лет</option>
                                <option value="Более 6 лет">Более 6 лет</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <select class="form-control" id="make1" name="shedule">
                                <option value="" disabled selected>График работы</option>
                                <option value="Полный день">Полный день</option>
                                <option value="Сменный график">Сменный график</option>
                                <option value="Гибкий график">Гибкий график</option>
                                <option value="Удаленная работа">Удаленная работа</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <select class="form-control" id="make1" name="education">
                                <option value="" disabled selected>Образование</option>
                                <option value="Неполное среднее">Неполное среднее</option>
                                <option value="Среднее">Среднее</option>
                                <option value="Среднее-специальное">Среднее-специальное</option>
                                <option value="Неполное высшее">Неполное высшее</option>
                                <option value="Высшее">Высшее</option>
                                <option value="Студент очник">Студент очник</option>
                                <option value="Студент заочник">Студент заочник</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <p class="form-group" >Зарплата от</p>
                            <input type="number" class="form-control" id="mileage1" name="money1" />
                        </div>

                        <div class="form-group">
                            <p class="form-group" >Зарплата до</p>
                            <input type="number" class="form-control" id="mileage1" name="money2" />
                        </div>

                        <div class="form-group">
                            <select class="form-control" id="make1" name="sort">
                                <option value="" disabled selected>Сортировать по</option>
                                <option value="По убыванию зарплат">По убыванию зарплаты</option>
                                <option value="По возрастанию зарплаты">По возрастанию зарплаты</option>
                            </select>
                        </div>

                        <button type="submit" href="#"  class="btn btn-primary">Найти</button>
                        <div class="pb-3">
                        </div>
                    </form>
                </div>
            </div>
            <main role="main" class="col-md-9" >

                <div class="container">
                    <div class="row" >
                                      <div class="col-md-4 information" >
                                          <div class="into">
                            <h2 >Верстальщик в компанию
                                TMN
                            </h2>
                            <p>30000₽</p>
                            <p maxlength="150">
                                Обязанности:
                                Понимание ТСР/IP, опыт монтажа СКС, преимуществом будет опыт работы в DIRECTIUM, 1 С ERP, OC Linux

                                Требования...</p>
                                              <p><a class="btn" href="http://coursach/public/job/18" role="button">Подробно»</a></p>
                                          </div>
                        </div>
                                      <div class="col-md-4 information"  >
                                          <div class="into">
                            <h2>Тестировщик в компанию
                                TMN
                            </h2>
                            <p>25000₽</p>
                            <p maxlength="150">
                                Обязанности:
                                Понимание ТСР/IP, опыт монтажа СКС, преимуществом будет опыт работы в DIRECTIUM, 1 С ERP, OC Linux

                                Требования...</p>
                                              <p><a class="btn" href="http://coursach/public/job/20" role="button">Подробно»</a></p>
                                              </div>
                        </div>
                                          <div class="col-md-4 information"  >
                                              <div class="into">
                            <h2 >Программист в компанию
                                TMN
                            </h2>
                            <p>28000₽</p>
                            <p maxlength="150">
                                Обязанности:
                                Понимание ТСР/IP, опыт монтажа СКС, преимуществом будет опыт работы в DIRECTIUM, 1 С ERP, OC Linux

                                Требования...</p>
                                                  <p><a class="btn" href="http://coursach/public/job/21" role="button">Подробно»</a></p>
                                                  </div>
                        </div>
                                      <div class="col-md-4 information"  >
                                          <div class="into">
                            <h2 >Веб-дизайнер в компанию
                                Leeeroy
                            </h2>
                            <p>45000₽</p>
                            <p maxlength="150">
                                Обязанности:
                                Понимание ТСР/IP, опыт монтажа СКС, преимуществом будет опыт работы в DIRECTIUM, 1 С ERP, OC Linux

                                Требования...</p>
                                              <p><a class="btn" href="http://coursach/public/job/22" role="button">Подробно»</a></p>
                                          </div>
                        </div>
                                      <div class="col-md-4 information"  >
                                          <div class="into">
                            <h2 >Программист в компанию
                                Leeeroy
                            </h2>
                            <p>28000₽</p>
                            <p maxlength="150">
                                Обязанности:
                                Понимание ТСР/IP, опыт монтажа СКС, преимуществом будет опыт работы в DIRECTIUM, 1 С ERP, OC Linux

                                Требования...</p>
                                              <p><a class="btn" href="http://coursach/public/job/23" role="button">Подробно»</a></p>
                                          </div>
                        </div>
                                      <div class="col-md-4 information"  >
                                          <div class="into">
                            <h2 >Верстальщик в компанию
                                Olimpus
                            </h2>
                            <p>36000₽</p>
                            <p maxlength="150">
                                Обязанности:
                                Понимание ТСР/IP, опыт монтажа СКС, преимуществом будет опыт работы в DIRECTIUM, 1 С ERP, OC Linux

                                Требования...</p>
                                              <p><a class="btn" href="http://coursach/public/job/24" role="button">Подробно»</a></p>
                                          </div>
                        </div>
                                      <div class="col-md-4 information" >
                                          <div class="into">
                            <h2 >Тестировщик в компанию
                                Olimpus
                            </h2>
                            <p>22000₽</p>
                            <p maxlength="150">
                                Обязанности:
                                Понимание ТСР/IP, опыт монтажа СКС, преимуществом будет опыт работы в DIRECTIUM, 1 С ERP, OC Linux

                                Требования...</p>
                                              <p><a class="btn" href="http://coursach/public/job/25" role="button">Подробно»</a></p>
                                          </div>
                        </div>
                                      <div class="col-md-4 information"  >
                                          <div class="into">
                            <h2>Верстальщик в компанию
                                Olimpus
                            </h2>
                            <p>33000₽</p>
                            <p maxlength="150">
                                Обязанности:
                                Понимание ТСР/IP, опыт монтажа СКС, преимуществом будет опыт работы в DIRECTIUM, 1 С ERP, OC Linux

                                Требования...</p>
                                              <p><a class="btn" href="http://coursach/public/job/26" role="button">Подробно»</a></p>
                                          </div>
                        </div>
                                      <div class="col-md-4 information"  >
                                          <div class="into">
                            <h2>Веб-дизайнер в компанию
                                Barretta
                            </h2>
                            <p>32000₽</p>
                            <p maxlength="150">
                                Обязанности:
                                Понимание ТСР/IP, опыт монтажа СКС, преимуществом будет опыт работы в DIRECTIUM, 1 С ERP, OC Linux

                                Требования...</p>
                                              <p><a class="btn" href="http://coursach/public/job/27" role="button">Подробно»</a></p>
                                          </div>
                        </div>


                    </div>
                </div>
            </main>
        </div>
    </div>
</div>
<div class="row">

</div>

<footer class="page-footer font-small blue" >

    <div class="footer-copyright text-center py-3" >© 2020 Copyright:
        <a href="">TMNWork</a>
    </div>


</footer>

<script src="http://coursach/public/js/app.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script src="js/maskedinput.js"></script>
          
          </div>
    );
  }
}
