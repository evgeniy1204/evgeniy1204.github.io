var app = angular.module('app');

app.controller('mainController', function($scope) {

    $scope.headerMenu = [{
                        menu: 'Главная',
                        href: 'index.html#home'
                        },
                        {
                        menu: 'Процесс работы',
                        href: 'index.html#economia'
                        },
                        {
                        menu: 'Галерея',
                        href: 'index.html#images'
                        },
                        {
                        menu: 'О гипсовой штукатурке',
                        href: 'index.html#portfolio'
                        },
                        {
                        menu: 'Контакты',
                        href: 'index.html#contact'
                        }

                    ];

    $scope.plus = [{
                    title: 'Быстро',
                    text: 'За счет механизации процесса и использования готовой смеси, время высыхания 3-7 дней.'
                    },
                    {
                    title: 'Качественно',
                    text: 'За счет однородной смеси и легкого материала поверхность идеально ровная и дает меньшую усадку.'
                    },
                    {
                    title: 'Не дорого',
                    text: 'Затраты на материалы, доставку, разгрузку ниже. Оплата за рабочие процессы и потери материала минимизированы, что сохраняет Ваши деньги.'
                    }
                ];

    $scope.minus = [{
                    title: 'Долго',
                    text: 'Подготовка материала дольше (просеивание, перенос, замешивание и т.д.). Время высыхания до 1 месяца.'
                    },
                    {
                    title: 'Менее качественно',
                    text: 'Дает большую усадку и требует последующего шпаклевания.'
                    },
                    {
                    title: 'Дорого',
                    text: 'Расходы на материалы, доставку, разгрезку выше. Большие потери материала при работе.'
                    },

                ];
    $scope.gallery = [{
                        class: 'example',
                        name: '1287160221.jpg'
                    },
                    {
                        class: 'example',
                        name: 'pr31.jpg'
                    },
                    {
                        class: 'machine',
                        name: 'A-5s.jpg'
                    },
                    {
                        class: 'example',
                        name: '3917542072.jpg'
                    },
                    {
                        class: 'machine',
                        name: 'AGREGAT_TYNKARSK_4ea08a942ac88-500x500.jpg'
                    },
                    {
                        class: 'machine',
                        name: 'DSC01176.jpg'
                    },
                    {
                        class: 'example',
                        name: 'gips.jpg'
                    },
                    {
                        class: 'machine',
                        name: 'kaleta5aa.jpg'
                    },
                ];
});