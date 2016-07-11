angular.module('ssi', [])
	.controller('calendarioCtrl', function($scope) {
		$scope.palestras = palestras;
	})
	.controller('palestranteCtrl', function($scope) {
		$scope.palestrantes = palestrantes;
	})
	.controller('marcasCtrl', function($scope) {
		$scope.organizadores =
		[
			{
				"nome": "DASI",
				"logo": "http://placehold.it/350x150/602d8c/ffffff/?text=DASI",
				"url": "http://dasiusp.com"
			}
		];
		$scope.empresas =
		[
			{
				"nome": "BTC",
				"logo": "img/logo_btc.png",
				"url": "http://www.btcompany.com.br"
			},
			{
				"nome": "Caelum",
				"logo": "img/logo_caelum.svg",
				"url": "http://www.caelum.com.br"
			},
			{
				"nome": "Conquest",
				"logo": "img/logo_conquest.png",
				"url": "http://www.conquest.com.br"
			},
			{
				"nome": "Iteris",
				"logo": "img/logo_iteris.png",
				"url": "http://www.iteris.com.br"
			},
			{
				"nome": "Mãe Terra",
				"logo": "img/logo_mae_terra.png",
				"url": "http://www.maeterra.com.br"
			}
		];
		$scope.apoiadores =
		[
			{
				"nome": "Casa do Código",
				"logo": "img/logo_casa_do_codigo.png",
				"url": "https://www.casadocodigo.com.br/"
			},
			{
				"nome": "EACH",
				"logo": "http://placehold.it/350x150/37c2d8/ffffff/?text=EACH",
				"url": "http://www5.each.usp.br"
			},
			{
				"nome": "USP",
				"logo": "http://placehold.it/350x150/fcb421/ffffff/?text=USP",
				"url": "http://www5.usp.br"
			}

		];
	});

var palestras =
[
	{
	"horario": {
	  "fim": "6:28",
	  "inicio": "3:18"
	},
	"tema": "Tecnologia",
	"local": "Auditório Verde",
	"palestrante": "Terri Morrow",
	"titulo": "aute laborum proident"
	},
	{
	"horario": {
	  "fim": "5:51",
	  "inicio": "3:13"
	},
	"tema": "Jogos",
	"local": "Auditório Verde",
	"palestrante": "Todd Lambert",
	"titulo": "mollit et labore"
	},
	{
	"horario": {
	  "fim": "11:1",
	  "inicio": "8:33"
	},
	"tema": "Tecnologia",
	"local": "Auditório Vermelho",
	"palestrante": "Wade Clements",
	"titulo": "fugiat commodo excepteur"
	},
	{
	"horario": {
	  "fim": "9:25",
	  "inicio": "7:4"
	},
	"tema": "Empreendedorismo",
	"local": "Auditório Verde",
	"palestrante": "Thomas Dillon",
	"titulo": "proident sunt culpa"
	},
	{
	"horario": {
	  "fim": "4:19",
	  "inicio": "7:1"
	},
	"tema": "Tecnologia",
	"local": "Auditório Azul",
	"palestrante": "Wood May",
	"titulo": "mollit Lorem ex"
	},
	{
	"horario": {
	  "fim": "3:5",
	  "inicio": "7:37"
	},
	"tema": "Tecnologia",
	"local": "Auditório Azul",
	"palestrante": "Silvia Flynn",
	"titulo": "magna cillum aliquip"
	},
	{
	"horario": {
	  "fim": "5:33",
	  "inicio": "3:39"
	},
	"tema": "Empreendedorismo",
	"local": "Auditório Vermelho",
	"palestrante": "Sullivan Clay",
	"titulo": "nisi pariatur ex"
	},
	{
	"horario": {
	  "fim": "5:39",
	  "inicio": "3:33"
	},
	"tema": "Tecnologia",
	"local": "Auditório Vermelho",
	"palestrante": "Roberta Browning",
	"titulo": "id duis pariatur"
	},
	{
	"horario": {
	  "fim": "11:42",
	  "inicio": "4:38"
	},
	"tema": "Empreendedorismo",
	"local": "Auditório Azul",
	"palestrante": "Georgette Davenport",
	"titulo": "deserunt sit qui"
	},
	{
	"horario": {
	  "fim": "6:5",
	  "inicio": "9:37"
	},
	"tema": "Empreendedorismo",
	"local": "Auditório Vermelho",
	"palestrante": "Diann Hughes",
	"titulo": "laborum fugiat minim"
	}
	];

var palestrantes =
[
	{
		'nome': 'Luis Leão',
		'foto': 'img/luis_leao.jpg',
		'descricao': 'Engenheiro de inovação, é co-organizador do Google Developer Group São Paulo (GDG-SP) e membro do Garoa Hacker Clube. Viabiliza ideias factíveis com tecnologia, contribuindo em projetos open data, através da comunidade Transparência Hacker. Desenvolvedor desde 2000, criou o sms2blog: o primeiro gateway de SMS para Twitter no Brasil e atuou em agências digitais de marcas como Google, Coca-Cola, Nestlé, Itaucard, Fiat, GE, Globo Minas, Iveco, Usiminas, Vivo and Yamaha. Entre suas especialidades, estão Internet das Coisas, APIs, JavaScript, HTML, Arduino, Python e .Net'
	},
	{
		'nome': 'Fernando Badapoulos',
		'foto': 'img/fernando_badapoulos.png',
		'descricao': 'Arquiteto de software, empresário e entusiasta de novas tecnologias, foi responsável pelo desenvolvimento de algumas das aplicações web mais conhecidas do Brasil e do exterior. Palestrante frequente em conferências nacionais e internacionais. Com mais de 15 anos de experiência na área de internet, é especialista na criação e concepção de sistemas de alto desempenho. Mestre em engenharia da informação pela Universidade Federal do ABC e bacharel em ciências da computação pelo Centro Universitário da FEI, hoje Fernando é CTO da Tail, a maior provedora de ciência de dados para o mercado publicitário do Brasil e que ganhou o Duke’s Choice Award 2015.'
	},
	{
		'nome': 'Bruno Cicanci',
		'foto': 'img/bruno_cicanci.jpg',
		'descricao': 'Bruno Cicanci é um programador com mais de 11 anos de experiência e trabalha há 6 anos com desenvolvimento de jogos mobile. Formado em Ciência da Computação e pós-graduado em Produção e Programação de Jogos, já trabalhou em grandes empresas de games como Glu Mobile e Electronic Arts. Há 7 anos escreve sobre desenvolvimento de jogos no seu blog, gamedeveloper.com.br.'
	},
	{
		'nome': 'Ailton Santos',
		'foto': 'img/ainton_santos.jpg',
		'descricao': 'Ailton is responsible to provide the leadership needed to grow the software business within Brazil, leveraging solid IT experience and strong communication skills to collaborate effectively with business clients in their transformation road map to the digital economy, by creating new outcomes from apps, data and experiences, proactively managing all forms of risk, building contextually-aware and predictive environment in a hyper-connected workplace and ecosystem.Ailton is a seasoned executive who comes from Enterprise Services business unit where he was the Country Chief Technologist, leading a team of multi-industry CTs (Chief Technologists) responsible for driving growth and innovation in Brazil while transforming clients to the New Style of IT. In this role, he has defined a strategic agenda to implement client roadmaps that are aligned to business outcomes, resulting in a One-HP strategy that has already positioned HP Brazil in a different level with the largest local companies. Before that, he was the Infrastructure Operations Director for Enterprise Services Brazil, Data Center Operations Director for EDS Latin America, among others. Ailton joined HP (EDS) in 1994 and had also an experience working in the US, when he was the Global Data Center, Hosting and Storage Director for Baker Hughes from 2009 to 2012, year in which he returned to Brazil to re-join HP. Ailton has a Bachelor of Science degree in Mathematics / Computer Science from UFF University and a Master of Science degree in Engineering Management from Southern Methodist University (USA), plus a MBA degree from FGV University – Brazil, and a certificate in Advanced Strategic Management from IMD (Switzerland).  Ailton is based in Sao Paulo, Brazil where he lives with his wife and son.'
	},
];