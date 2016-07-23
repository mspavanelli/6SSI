angular.module('ssi', [])
	.controller('calendarioCtrl', function($scope) {
		$scope.palestras = palestras;
	})
	.controller('palestranteCtrl', function($scope) {
		$scope.palestrantes =
		[
			{
				"nome": "Cláudia Rosas",
				"foto": "img/p_claudia_rosas.png",
				"descricao": "Cláudia Rosas é Psicóloga formada na Universidade Metodista de São Paulo, com MBA em Gestão de Pessoas na FGV.Especialista em Recrutamento e Seleção de Profissionais de TI há 10 anos e gestão de equipes de alto desempenho, atualmente é a gestora responsável pelo time de Aquisição de Talentos da Consultoria Conquest One."
			},
			{
				"nome": "Márcio Ribeiro",
				"foto": "img/p_marcio_ribeiro.png",
				"descricao": "Márcio Moretto Ribeiro é professor de Sistemas de Informação na Escola de Artes e Humanidades da USP e pesquisador do Grupo de Políticas Públicas de Acesso à Informação. Sua tese de doutorado sobre revisão de crenças e lógicas de descrição, defendida em 2010, ganhou o prêmio de melhor tese do ano pela Sociedade Brasileira de Computação. Atualmente seus campos de estudo incluem privacidade, vigilância e a polarização do debate política nas redes sociais."
			},
			{
				"nome": "Jorge Vieira",
				"foto": "img/p_jorge_vieira.png",
				"descricao": "Jorge Vieira é um programador e entusiasta de agile que acabou se apaixonando por empreendedorismo. Bacharel em Ciência da Computação pela Universidade São Judas Tadeu, possui mais de seis anos de experiência em desenvolvimento de software, dos quais três são dedicados ao Desenvolvimento de Games. É Cofundador da Etheral Flame Studios, empresa paulistana que desenvolveu o game Spaceship Overdrive, o qual foi premiado como “Melhor jogo para portáteis/mobile da Brasil Game Show 2015” pela Brazil Game Awards e foi semifinalista no BIG Festival 2016."
			},
			{
				"nome": "Jéssica Tauane",
				"foto": "img/p_jessica.png",
				"descricao": "Jessica é comunicóloga com ênfase em novas mídias pela PUC-SP e Youtuber dos canais \"Canal das Bee\" e \"Gorda de Boa\", canais focados em ativismo LGBT, empoderamento feminino e humor."
			},
			{
				"nome": "Erick Varzot",
				"foto": "img/p_erick_varzot.png",
				"descricao": "Erick Varzot é desenvolvedor de Games e Dungeon Master. Bacharel em Ciência da Computação na Universidade São Judas Tadeu, atua profissionalmente em TI desde 2012 e passou a trabalhar com Pesquisa e Desenvolvimento de Games desde 2013. É Cofundador da Etheral Flame Studios, empresa paulistana que desenvolveu o game Spaceship Overdrive, o qual foi premiado como “Melhor jogo para portáteis/mobile da Brasil Game Show 2015” pela Brazil Game Awards e foi semifinalista no BIG Festival 2016."
			},
			{
				'nome': 'Luis Leão',
				'foto': 'img/p_luis_leao.png',
				'descricao': 'Engenheiro de inovação, é co-organizador do Google Developer Group São Paulo (GDG-SP) e membro do Garoa Hacker Clube. Viabiliza ideias factíveis com tecnologia, contribuindo em projetos open data, através da comunidade Transparência Hacker. Desenvolvedor desde 2000, criou o sms2blog: o primeiro gateway de SMS para Twitter no Brasil e atuou em agências digitais de marcas como Google, Coca-Cola, Nestlé, Itaucard, Fiat, GE, Globo Minas, Iveco, Usiminas, Vivo and Yamaha. Entre suas especialidades, estão Internet das Coisas, APIs, JavaScript, HTML, Arduino, Python e .Net'
			},
			{
				'nome': 'Fernando Babadopulos',
				'foto': 'img/p_fernando_babadopulos.png',
				'descricao': 'Arquiteto de software, empresário e entusiasta de novas tecnologias, foi responsável pelo desenvolvimento de algumas das aplicações web mais conhecidas do Brasil e do exterior. Palestrante frequente em conferências nacionais e internacionais. Com mais de 15 anos de experiência na área de internet, é especialista na criação e concepção de sistemas de alto desempenho. Mestre em engenharia da informação pela Universidade Federal do ABC e bacharel em ciências da computação pelo Centro Universitário da FEI, hoje Fernando é CTO da Tail, a maior provedora de ciência de dados para o mercado publicitário do Brasil e que ganhou o Duke’s Choice Award 2015.'
			},
			{
				'nome': 'Bruno Cicanci',
				'foto': 'img/p_bruno_cicanci.png',
				'descricao': 'Bruno Cicanci é um programador com mais de 11 anos de experiência e trabalha há 6 anos com desenvolvimento de jogos mobile. Formado em Ciência da Computação e pós-graduado em Produção e Programação de Jogos, já trabalhou em grandes empresas de games como Glu Mobile e Electronic Arts. Há 7 anos escreve sobre desenvolvimento de jogos no seu blog, gamedeveloper.com.br.'
			},
			{
				'nome': 'Ailton Santos',
				'foto': 'img/p_ailton_santos.png',
				'descricao': 'Ailton Santos é formado em Matemática/Ciência da Computação pela UFF e tem mestrado em Engenharia de Gestão pela Southern Methodist University (EUA), além de um MBA pela FGV e um certificado em Gestão Estratégica Avançada do IMD (Suíça). Possui vasta experiência como executivo, tendo liderado grandes equipes de tecnologia e inovação na EDS desde 1994, empresa adquirida pela HP em 2008. Atualmente é vice-presidente da unidade de Software da HP Brasil.'
			},
			{
				'nome': 'Ariane Parra',
				'foto': 'img/p_ariane_parra.png',
				'descricao': 'Ariane Parra é CEO & Fundadora do Women Up Games, apaixonada por games, influenciadora digital, empreendedora, designer de games e encantada por esse mundo. Formanda em Engenharia de Produção pela PUC-SP. Certificou-se em Gestão e Liderança pela Universidade de Pittsburgh - EUA (Management and Leadership Program) em 2009, parceria com a Universidade Presbiteriana Mackenzie. Atua como mentora de empreendedoras em eventos influentes de tecnologia, além de ser participante ativa em painéis e debates favorecendo o empoderamento de mulheres através da tecnologia, representando a classe feminina no setor de games.'
			},
			{
				'nome': 'Cássia Sanctos',
				'foto': 'img/p_cassia_sanctos.png',
				'descricao': 'Cássia Sanctos possui graduação em Filosofia pela PUC-SP, mestrado strictu sensu em Fundamentos da Matemática também pela PUC-SP e cursa o último ano de Sistemas de Informação na FIAP. Trabalhou na IBM como Business Analyst para sistemas de CIO Sales e agora trabalha como Developer em projetos de Watson para CIO no Holmes Squad'
			},
			{
				'nome': 'Diego Aranha',
				'foto': 'img/p_diego_aranha.png',
				'descricao': 'Diego Aranha é professor da Unicamp. Coordenou a primeira equipe capaz de detectar e explorar vulnerabilidades no software da urna eletrônica em testes controlados organizados pelo TSE. Tem experiência na área de Criptografia e Segurança Computacional, com ênfase em implementação eficiente de algoritmos criptográficos e análise de segurança de sistemas reais. É Bacharel em Ciência da Computação pela Universidade de Brasília (2005), Mestre (2007) e Doutor (2011) em Ciência da Computação pela Universidade Estadual de Campinas. Recebeu em 2015 os prêmios Google Latin America Research Award para pesquisa em privacidade e Inovadores com Menos de 35 Anos Brasil da MIT Technology Review por seu trabalho com o voto eletrônico.'
			},
			{
				'nome': 'Thiago Araújo',
				'foto': 'img/p_thiago_araujo.png',
				'descricao': 'Thiago Araújo possui graduação em Ciência da Computação pela UNIP e quatro certificações na área de Banco de Dados e Analytics. Trabalhou com adminstração e integração de dados, ministrando diversos cursos na IBM relacionados à essa área. Atualmente trabalha como Developer em projetos de Watson para CIO no Holmes Squad.'
			},
			{
				'nome': 'Paulo Kretcheu',
				'foto': 'img/p_paulo_roberto.png',
				'descricao': 'Paulo Roberto Alves de Oliveira, mais conhecido pelo apelido Kretcheu, é membro tradicional da comunidade de Software Livre e defensor do conhecimento livre e acessível a todos, possuindo diversas certificações como LPI-C, UCP, Novell NCLA e DCTS. Administrador de redes a mais de 15 anos e professor universitário há 25, é formado em Engenharia Mecânica e pós-graduado em auditoria e segurança. Além disso é o idealizador e apresentador do Vídeo Blog: Kretcheu.com.br desde 2009.'
			},
			{
				'nome': 'Gustavo Silva',
				'foto': 'img/p_gustavo_silva.png',
				'descricao': 'Gustavo Silva é fundador da NutriSoft Brazil, startup que nasceu em 2013 durante o curso de Sistemas de Informação da USP com o objetivo de aproximar pacientes de nutricionistas, buscando tornar mais acessível os serviços e conteúdos sobre alimentação saudável. A empresa atingiu em 2015 a marca de 500.000 downloads e recebeu seu primeiro investimento do Grupo Abril, depois no Vale do Silício recebeu outra rodada de investimento. Hoje a NutriSoft conta com uma equipe de 8 pessoas, mais de 2.000.000 downloads e quer revolucionar o atendimento de pacientes crônicos no Brasil.'
			},
			{
				'nome': 'Fernando Rychlewski',
				'foto': 'img/p_fernando_rychlewski.png',
				'descricao':'Fernando Rychlewski atua há mais de 16 anos como desenvolvedor curioso, um Nerd como ele mesmo diz e tem mais de 8 anos de experiência em Análise e Gerência de Projetos de Sistemas em arquiteturas Web/Cloud. Os 12 anos de experiência com design gráfico fizeram com que se tornasse CEO de uma gráfica, seu Hobbie. Hoje atua na elaboração de evoluções tecnológicas e arquiteturas em sistemas de grandes corporações no mercado, além disso é organizador e palestrante de eventos para a comunidade de desenvolvedores brasileiros (Google Developers São Paulo, NetCoders, iMasters, etc).'
			}
		];
	})
	.controller('marcasCtrl', function($scope) {
		$scope.organizadores =
		[
			{
				"nome": "Comissão Organizadora",
				"logo": "imgr/logo_comissao.png",
				"url": "https://www.facebook.com/SSIUSP"
			},
			{
				"nome": "DASI",
				"logo": "imgr/logo_dasi.jpg",
				"url": "http://dasiusp.com"
			}
		];
		$scope.empresas =
		[
			{
				"nome": "BTC",
				"logo": "imgr/logo_btc.png",
				"url": "http://www.btcompany.com.br"
			},
			{
				"nome": "Conquest",
				"logo": "imgr/logo_conquest.png",
				"url": "http://www.conquest.com.br"
			},
			{
				"nome": "Iteris",
				"logo": "imgr/logo_iteris.png",
				"url": "http://www.iteris.com.br"
			},
			{
				"nome": "LexisNexis",
				"logo": "imgr/logo_lexisNexis.png",
				"url": "http://www.lexisnexis.com"
			},
			{
				"nome": "SAS",
				"logo": "imgr/logo_sas.png",
				"url": "http://www.sas.com/pt_br/home.html"
			},
			{
				"nome": "Caelum",
				"logo": "imgr/logo_caelum.png",
				"url": "http://www.caelum.com.br"
			}
		];
		$scope.apoiadores =
		[
			{
				"nome": "Casa do Código",
				"logo": "imgr/logo_casa_do_codigo.png",
				"url": "https://www.casadocodigo.com.br/"
			},
			{
				"nome": "Mãe Terra",
				"logo": "imgr/logo_mae_terra.png",
				"url": "http://www.maeterra.com.br"
			},
			{
				"nome": "PRCEU",
				"logo": "imgr/logo_prceu.png",
				"url": "http://prceu.usp.br"
			},
			{
				"nome": "EACH",
				"logo": "imgr/logo_each.jpg",
				"url": "http://www5.each.usp.br"
			},
			{
				"nome": "USP",
				"logo": "imgr/logo_usp.png",
				"url": "http://www5.usp.br"
			}
		];
	})
	.controller('rodapeCtrl', function($scope) {
		$scope.sites =
		[
			{
				'edicao': 'V Semana',
				'ano': '2015',
				'url': 'http://www.each.usp.br/semanasi/2015/'
			},
			{
				'edicao': 'IV Semana',
				'ano': '2013',
				'url': 'http://www.each.usp.br/semanasi/2013/index.php'
			},
			{
				'edicao': 'III Semana',
				'ano': '2012',
				'url': 'http://www.each.usp.br/semanasi/2012/'
			},
			{
				'edicao': 'II Semana',
				'ano': '2011',
				'url': 'http://www.each.usp.br/semanasi/2010/'
			},
			{
				'edicao': 'I Semana',
				'ano': '2009',
				'url': 'http://www.each.usp.br/semanasi/2009/'
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