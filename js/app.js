angular.module('ssi', [])
	.controller('calendarioCtrl', function($scope) {
		$scope.palestras = palestras;
	})
	.controller('palestranteCtrl', function($scope) {
		$scope.palestrantes =
		[
			{
				'nome': 'Luis Leão',
				'foto': 'img/luis_leao.png',
				'descricao': 'Engenheiro de inovação, é co-organizador do Google Developer Group São Paulo (GDG-SP) e membro do Garoa Hacker Clube. Viabiliza ideias factíveis com tecnologia, contribuindo em projetos open data, através da comunidade Transparência Hacker. Desenvolvedor desde 2000, criou o sms2blog: o primeiro gateway de SMS para Twitter no Brasil e atuou em agências digitais de marcas como Google, Coca-Cola, Nestlé, Itaucard, Fiat, GE, Globo Minas, Iveco, Usiminas, Vivo and Yamaha. Entre suas especialidades, estão Internet das Coisas, APIs, JavaScript, HTML, Arduino, Python e .Net'
			},
			{
				'nome': 'Fernando Badapoulos',
				'foto': 'img/fernando_badapoulos.png',
				'descricao': 'Arquiteto de software, empresário e entusiasta de novas tecnologias, foi responsável pelo desenvolvimento de algumas das aplicações web mais conhecidas do Brasil e do exterior. Palestrante frequente em conferências nacionais e internacionais. Com mais de 15 anos de experiência na área de internet, é especialista na criação e concepção de sistemas de alto desempenho. Mestre em engenharia da informação pela Universidade Federal do ABC e bacharel em ciências da computação pelo Centro Universitário da FEI, hoje Fernando é CTO da Tail, a maior provedora de ciência de dados para o mercado publicitário do Brasil e que ganhou o Duke’s Choice Award 2015.'
			},
			{
				'nome': 'Bruno Cicanci',
				'foto': 'img/bruno_cicanci.png',
				'descricao': 'Bruno Cicanci é um programador com mais de 11 anos de experiência e trabalha há 6 anos com desenvolvimento de jogos mobile. Formado em Ciência da Computação e pós-graduado em Produção e Programação de Jogos, já trabalhou em grandes empresas de games como Glu Mobile e Electronic Arts. Há 7 anos escreve sobre desenvolvimento de jogos no seu blog, gamedeveloper.com.br.'
			},
			{
				'nome': 'Ailton Santos',
				'foto': 'img/ailton_santos.png',
				'descricao': 'Ailton Santos é formado em Matemática/Ciência da Computação pela UFF e tem mestrado em Engenharia de Gestão pela Southern Methodist University (EUA), além de um MBA pela FGV e um certificado em Gestão Estratégica Avançada do IMD (Suíça). Possui vasta experiência como executivo, tendo liderado grandes equipes de tecnologia e inovação na EDS desde 1994, empresa adquirida pela HP em 2008. Atualmente é vice-presidente da unidade de Software da HP Brasil.'
			},
			{
				'nome': 'Ariane Parra',
				'foto': 'img/ariane_parra.png',
				'descricao': 'Ariane Parra é CEO & Fundadora do Women Up Games, apaixonada por games, influenciadora digital, empreendedora, designer de games e encantada por esse mundo. Formanda em Engenharia de Produção pela PUC-SP. Certificou-se em Gestão e Liderança pela Universidade de Pittsburgh - EUA (Management and Leadership Program) em 2009, parceria com a Universidade Presbiteriana Mackenzie. Atua como mentora de empreendedoras em eventos influentes de tecnologia, além de ser participante ativa em painéis e debates favorecendo o empoderamento de mulheres através da tecnologia, representando a classe feminina no setor de games.'
			},
			{
				'nome': 'Cássia Sanctos',
				'foto': 'img/cassia_sanctos.png',
				'descricao': 'Cássia Sanctos possui graduação em Filosofia pela PUC-SP, mestrado strictu sensu em Fundamentos da Matemática também pela PUC-SP e cursa o último ano de Sistemas de Informação na FIAP. Trabalhou na IBM como Business Analyst para sistemas de CIO Sales e agora trabalha como Developer em projetos de Watson para CIO no Holmes Squad'
			},
			{
				'nome': 'Diego Aranha',
				'foto': 'img/diego_aranha.png',
				'descricao': 'Diego Aranha é professor da Unicamp. Coordenou a primeira equipe capaz de detectar e explorar vulnerabilidades no software da urna eletrônica em testes controlados organizados pelo TSE. Tem experiência na área de Criptografia e Segurança Computacional, com ênfase em implementação eficiente de algoritmos criptográficos e análise de segurança de sistemas reais. É Bacharel em Ciência da Computação pela Universidade de Brasília (2005), Mestre (2007) e Doutor (2011) em Ciência da Computação pela Universidade Estadual de Campinas. Recebeu em 2015 os prêmios Google Latin America Research Award para pesquisa em privacidade e Inovadores com Menos de 35 Anos Brasil da MIT Technology Review por seu trabalho com o voto eletrônico.'
			},
			{
				'nome': 'Thiago Araújo',
				'foto': 'img/thiago_araujo.png',
				'descricao': 'Thiago Araújo possui graduação em Ciência da Computação pela UNIP e quatro certificações na área de Banco de Dados e Analytics. Trabalhou com adminstração e integração de dados, ministrando diversos cursos na IBM relacionados à essa área. Atualmente trabalha como Developer em projetos de Watson para CIO no Holmes Squad.'
			},
			{
				'nome': 'Paulo Roberto Alves de Oliveira',
				'foto': 'img/paulo_roberto.png',
				'descricao': 'Paulo Roberto Alves de Oliveira, mais conhecido pelo apelido Kretcheu, é membro tradicional da comunidade de Software Livre e defensor do conhecimento livre e acessível a todos, possuindo diversas certificações como LPI-C, UCP, Novell NCLA e DCTS. Administrador de redes a mais de 15 anos e professor universitário há 25, é formado em Engenharia Mecânica e pós-graduado em auditoria e segurança. Além disso é o idealizador e apresentador do Vídeo Blog: Kretcheu.com.br desde 2009.'
			},
			{
				'nome': 'Gustavo Silva',
				'foto': 'img/gustavo_silva.png',
				'descricao': 'Gustavo Silva é fundador da NutriSoft Brazil, startup que nasceu em 2013 durante o curso de Sistemas de Informação da USP com o objetivo de aproximar pacientes de nutricionistas, buscando tornar mais acessível os serviços e conteúdos sobre alimentação saudável. A empresa atingiu em 2015 a marca de 500.000 downloads e recebeu seu primeiro investimento do Grupo Abril, depois no Vale do Silício recebeu outra rodada de investimento. Hoje a NutriSoft conta com uma equipe de 8 pessoas, mais de 2.000.000 downloads e quer revolucionar o atendimento de pacientes crônicos no Brasil.'
			},
			{
				'nome': 'Fernando Rychlewski',
				'foto': 'img/fernando_rychlewski.png',
				'descricao':'Fernando Rychlewski atua há mais de 16 anos como desenvolvedor curioso, um Nerd como ele mesmo diz e tem mais de 8 anos de experiência em Análise e Gerência de Projetos de Sistemas em arquiteturas Web/Cloud. Os 12 anos de experiência com design gráfico fizeram com que se tornasse CEO de uma gráfica, seu Hobbie. Hoje atua na elaboração de evoluções tecnológicas e arquiteturas em sistemas de grandes corporações no mercado, além disso é organizador e palestrante de eventos para a comunidade de desenvolvedores brasileiros (Google Developers São Paulo, NetCoders, iMasters, etc).'
			}
		];
	})
	.controller('marcasCtrl', function($scope) {
		$scope.organizadores =
		[
			{
				"nome": "Comissão Organizadora",
				"logo": "img/logo_comissao.png",
				"url": "http://dasiusp.com"
			},
			{
				"nome": "DASI",
				"logo": "img/logo_dasi.jpg",
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
				"nome": "LexisNexis",
				"logo": "img/logo_lexisNexis.png",
				"url": "http://www.lexisnexis.com"
			},
			{
				"nome": "SAS",
				"logo": "img/logo_sas.png",
				"url": "http://www.sas.com/pt_br/home.html"
			},
			{
				"nome": "Caelum",
				"logo": "http://placehold.it/350x150/?text=Caelum",
				"url": "http://www.caelum.com.br"
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
				"logo": "img/logo_each.jpg",
				"url": "http://www5.each.usp.br"
			},
			{
				"nome": "USP",
				"logo": "img/logo_usp.png",
				"url": "http://www5.usp.br"
			},
			{
				"nome": "PRCEU",
				"logo": "img/logo_prceu.png",
				"url": "http://prceu.usp.br"
			},
			{
				"nome": "Mãe Terra",
				"logo": "img/logo_mae_terra.png",
				"url": "http://www.maeterra.com.br"
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