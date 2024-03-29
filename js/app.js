angular.module('ssi', ['ngSanitize'])
	.controller('calendarioCtrl', function($scope) {
		$scope.local =
		[
			{
				'nome': 'EACH - USP',
				'classe': 'text-default'
			},
			{
				'nome': 'Auditório Azul',
				'classe': 'text-primary'
			},
			{
				'nome': 'Hall dos Auditórios',
				'classe': 'text-default'
			},
			{
				'nome': 'Auditório Verde',
				'classe': 'text-success'
			},
			{
				'nome': 'Incubadora EACH-USP',
				'classe': 'text-danger'
			}
		];
		$scope.palestras15 = 
		[
			{
				'horario': '13h',
				'titulo': 'Apresentação do campus da EACH-USP à convidados externos',
				'local': $scope.local[0]
			},
			{
				'horario': '14h30',
				'titulo': 'Mesa de Discentes e Docentes de SI',
				'local': $scope.local[1]
			},
			{
				'horario': '16h',
				'titulo': 'Coffee Break',
				'local': $scope.local[2],
				'destaque': 'active'
			},
			{
				'horario': '16h30',
				'titulo': 'Mesa de Egressos de SI',
				'local': $scope.local[1]
			},
			{
				'horario': '18h',
				'titulo': 'Apresentação artística',
				'local': $scope.local[0]
			},
			{
				'horario': '19h',
				'titulo': 'Abertura oficial da 6ª SSI',
				'local': $scope.local[1]
			},
			{
				'horario': '19h30',
				'titulo': 'Esquenta EACH Hack Lab',
				'local': $scope.local[1]
			}
		];
		$scope.palestras16 =
		[
			{
				'horario': '8h - 12h30',
				'titulo': 'Workshop PPgSI',
				'palestrante': '<a href="http://goo.gl/btO4lQ" target="_blank">PPgSI</a>',
				'local': $scope.local[3]
			},
			{
				'horario': '9h',
				'titulo': 'Coffee Break',
				'local': $scope.local[2],
				'destaque': 'active'
			},
			{
				'horario': '9h30',
				'titulo': 'Oportunidades EACH',
				'palestrante': 'Grupos de pesquisa',
				'local': $scope.local[1]
			},
			{
				'horario': '11h',
				'titulo': 'Mercado de TI',
				'palestrante': 'Cláudia Rosas - CQOne',
				'local': $scope.local[1]
			},
			{
				'horario': '12h',
				'titulo': 'Intervalo',
				'destaque': 'active'
			},
			{
				'horario': '13h',
				'titulo': 'Painel: “Software Livre e Dados abertos”',
				'palestrante': 'Paulo Krecheu, Márcio Moretto e Gisele Craveiro',
				'local': $scope.local[1]
			},			
			{
				'horario': '13h30 - 18h30',
				'titulo': 'Workshop PPgSI',
				'palestrante': '<a href="http://goo.gl/btO4lQ" target="_blank">PPgSI</a>',
				'local': $scope.local[3]
			},
			{
				'horario': '14h30',
				'titulo': 'Desenvolvendo uma Startup do zero durante a graduação - Nutrisoft',
				'palestrante': 'Gustavo Silva',
				'local': $scope.local[1]
			},
			{
				'horario': '15h30',
				'titulo': 'UX de costa a costa',
				'palestrante': 'Alda Rocha',
				'local': $scope.local[1]
			},
			{
				'horario': '16h30',
				'titulo': 'Coffee Break',
				'local': $scope.local[2],
				'destaque': 'active'
			},
			{
				'horario': '17h',
				'titulo': 'Mulheres nos games: um panorama geral sobre as mulheres dentro e fora dos jogos digitais',
				'palestrante': 'Ariane Parra',
				'local': $scope.local[1]
			},
			{
				'horario': '19h',
				'titulo': 'Desenvolvimento de Aplicações Web com ASP Net MVC',
				'palestrante': 'João Gabriel Stevanatto',
				'local': $scope.local[1]
			},
			{
				'horario': '20h',
				'titulo': 'Big Data e Cloud Computing - Casos de Uso',
				'palestrante': 'Fernando Babadopulos',
				'local': $scope.local[1]
			},
			{
				'horario': '21h',
				'titulo': 'Mas afinal, como é desenvolver games aqui no Brasil?',
				'palestrante': 'Fernando Chamis',
				'local': $scope.local[1]
			}
		];
		$scope.palestras17 =
		[
			{
				'horario': '9h',
				'titulo': 'Coffe Break',
				'local': $scope.local[2],
				'destaque': 'active'
			},
			{
				'horario': '9h30',
				'titulo': 'Oportunidades EACH',
				'palestrante': 'DASI, PET-SI e SI USP Jr',
				'local': $scope.local[1]
			},
			{
				'horario': '10h',
				'titulo': 'Game Jams - Como fazer um jogo em 48h',
				'palestrante': 'Bruno Cicanci',
				'local': $scope.local[1]
			},
			{
				'horario': '11h',
				'titulo': 'Enterprise Architecture in Process Management (Inglês)',
				'palestrante': 'Rosario Villalta - UPC',
				'local': $scope.local[1]
			},
			{
				'horario': '12h',
				'titulo': 'Intervalo',
				'destaque': 'active'
			},
			{
				'horario': '13h30 - 18h30',
				'titulo': 'Workshop PPgSI',
				'palestrante': '<a href="http://goo.gl/btO4lQ" target="_blank">PPgSI</a>',
				'local': $scope.local[3]
			},
			{
				'horario': '13h30',
				'titulo': 'Hackeando Dados Públicos com Python',
				'palestrante': 'Fernando Masanori',
				'local': $scope.local[1]
			},
			{
				'horario': '14h30',
				'titulo': 'Aperfeiçoando o voto eletrônico no Brasil',
				'palestrante': 'Diego Aranha',
				'local': $scope.local[1]
			},
			{
				'horario': '15h30',
				'titulo': 'Desenvolvimento de games – Não entre em pânico! A vida, o universo etudo mais',
				'palestrante': 'Etheral Flame',
				'local': $scope.local[1]
			},
			{
				'horario': '16h30',
				'titulo': 'Coffee Break',
				'local': $scope.local[2],
				'destaque': 'active'
			},
			{
				'horario': '17h',
				'titulo': 'Game Design 101 :)',
				'palestrante': 'Helô Yoshioka'
			},
			{
				'horario': '18h',
				'titulo': 'Marketing para Empreendedores',
				'palestrante': 'Eduardo Bonini - BTC',
				'local': $scope.local[1]
			},
			{
				'horario': '19h',
				'titulo': 'Meet IBM Watson',
				'palestrante': 'Cássia Sanctos e Thiago Araújo',
				'local': $scope.local[1]
			},
			{
				'horario': '21h',
				'titulo': 'A Evolução da Realidade Virtual e Como Começar',
				'palestrante': 'Fernando Rychlewski',
				'local': $scope.local[1]
			}
		];		
		$scope.palestras18 =
		[
			{
				'horario': '8h - 12h30',
				'titulo': 'Workshop PPgSI',
				'palestrante': '<a href="http://goo.gl/btO4lQ" target="_blank">PPgSI</a>',
				'local': $scope.local[3]
			},
			{
				'horario': '9h',
				'titulo': 'Coffe Break',
				'local': $scope.local[2],
				'destaque': 'active'
			},
			{
				'horario': '9h30',
				'titulo': 'Oportunidades EACH',
				'palestrante': 'WebDev, GameDev, EACH Social, Cursinho da EACH e HUBEE, WebDev, GameDev, EACH Social, Cursinho da EACH e Hubee',
				'local': $scope.local[1]
			},
			{
				'horario': '10h30',
				'titulo': 'Uma visão geral sobre técnicas de Machine Learning',
				'palestrante': 'Pedro Shiguihara - UPC',
				'local': $scope.local[1]
			},
			{
				'horario': '11h30',
				'titulo': 'Intervalo',
				'destaque': 'active'
			},
			{
				'horario': '12h30',
				'titulo': 'Novidades do Android N',
				'palestrante': 'Suelen Carvalho',
				'local': $scope.local[1]
			},
			{
				'horario': '14h',
				'titulo': 'Progressive WebApps: o melhor da Web, Appficada',
				'palestrante': 'Sérgio Lopes',
				'local': $scope.local[1]
			},
			{
				'horario': '15h',
				'titulo': 'HandsOn de Internet das Coisas com Firebase',
				'palestrante': 'Luís Leão',
				'local': $scope.local[1]
			},			
			{
				'horario': '16h',
				'titulo': 'Coffe Break',
				'local': $scope.local[2],
				'destaque': 'active'
			},
			{
				'horario': '16h30',
				'titulo': 'SAS e as tendências de mercado analítico',
				'palestrante': 'Adriana Silva - SAS',
				'local': $scope.local[1]
			},
			{
				'horario': '17h30',
				'titulo': 'Painel: “A Revolução das Mulheres”',
				'palestrante': 'Iana Chan, Lúcia Freitas e Fernanda Bernardo',
				'local': $scope.local[1]
			},
			{
				'horario': '19h',
				'titulo': 'O que aprendi com 10 dias de silêncio',
				'palestrante': 'Renato Stefani',
				'local': $scope.local[1]
			},
			{
				'horario': '20h',
				'titulo': 'Big Data advances using LexisNexis Risk Solutions HPCC Systems',
				'palestrante': 'Brian Hirsch, Claudio Amaral e Caio Dias - Lexis Nexis',
				'local': $scope.local[1]
			},
			{
				'horario': '21h',
				'titulo': 'YouTube e ativismo LGBT: como a comunicação pode salvar vidas',
				'palestrante': 'Jessica Tauane',
				'local': $scope.local[1]
			},
			{
				'horario': '22h',
				'titulo': 'Encerramento oficial da 6ªSSI',
				'local': $scope.local[1]
			}
		];
		$scope.palestras19 =
		[
			{
				'horario': '10h',
				'titulo': 'Início do EACH Hack Lab',
				'local': $scope.local[4]
			}
		];

		$scope.palestras = function(dia) {
			switch ( dia ) {
				case 15: return $scope.palestras15;
				case 16: return $scope.palestras16;
				case 17: return $scope.palestras17;
				case 18: return $scope.palestras18;
				case 19: return $scope.palestras19;
			}
		}
	})
	.controller('palestranteCtrl', function($scope) {
		$scope.palestrantes =
		[
			{
				'nome': 'Adriana Silva',
				'foto': 'adriana-silva',
				'descricao': 'Adriana Silva é graduada em Estatística e Mestre em Ciências: Estatística e Experimentação Agronômica. Professora nos cursos: “Análise de Dados e Data Mining” e “Análise de Big Data” da FIA, onde ministra aulas de Regressão Linear, Logística e Árvore de Decisão, Social Network Analysis, além de aulas aplicadas em R, SPSS e SAS. Adriana é certificada em SAS Base Programming, SAS Predictive Modeler Using SAS Enterprise Miner, e tem experiência em projetos analíticos na área de modelagem, Regular Price Optimization e Social Network Analysis'
			},
			{
				'nome': 'Alda Rocha',
				'foto': 'alda-rocha',
				'descricao': 'Alda Rocha é consultora e instrutora de Usabilidade, UX/UI designer, Web desenvolvedora, front-end, formada em arquitetura da informação com mais de 16 anos de experiência. Além de desenvolvedora, é engajada nas causas femininas e tecnológicas. Foi coordenadora de plataformas e soluções de TI na IOT Lab, web Designer e Designer gráfico. Desenvolveu projetos para muitas marcas consolidadas no Brasil e no mundo, agência digitais, startups e grandes empresas.'
			},
			{
				'nome': 'Ariane Parra',
				'foto': 'ariane-parra',
				'descricao': 'Ariane Parra é CEO & Fundadora do Women Up Games, apaixonada por games, influenciadora digital, empreendedora, designer de games e encantada por esse mundo. Formanda em Engenharia de Produção pela PUC-SP. Certificou-se em Gestão e Liderança pela Universidade de Pittsburgh - EUA (Management and Leadership Program) em 2009, parceria com a Universidade Presbiteriana Mackenzie. Atua como mentora de empreendedoras em eventos influentes de tecnologia, além de ser participante ativa em painéis e debates favorecendo o empoderamento de mulheres através da tecnologia, representando a classe feminina no setor de games.'
			},
			{
				'nome': 'Brian Hirsch',
				'foto': 'brian',
				'descricao': 'Brian Hirsch é Diretor Sênior da LexisNexis Risk Solutions no Brasil e líder de negócios para todos os aspectos de implantações do HPCC no Brasil. Brian ingressou na LexisNexis em 2005. Ao longo de sua carreira, suas funções evoluíram até chegar na liderança de consultoria analítica. Antes de ingressar na LexisNexis, Brian ocupou vários cargos de liderança no Banco Capital One, além de ter experiência internacional, incluindo Estados Unidos, México, Brasil e Angola. Brian é bacharel em Química pela University of Richmond e possui um MBA Internacional pela Thunderbird, The American Graduate School of International Management.'
			},
			{
				'nome': 'Bruno Cicanci',
				'foto': 'bruno-cicanci',
				'descricao': 'Bruno Cicanci é um programador com mais de 11 anos de experiência e trabalha há 6 anos com desenvolvimento de jogos mobile. Formado em Ciência da Computação e pós-graduado em Produção e Programação de Jogos, já trabalhou em grandes empresas de games como Glu Mobile e Electronic Arts. Há 7 anos escreve sobre desenvolvimento de jogos no seu blog <a href="http://gamedeveloper.com.br" target="_blank">gamedeveloper.com.br</a>.'
			},
			{
				'nome': 'Caio Dias',
				'foto': 'caio-dias',
				'descricao': 'Caio Dias ingressou na LexisNexis no início de 2016 e desenvolve modelos de scoring em Big Data nas áreas de seguro saúde e automóvel. Anteriormente, trabalhou na área analítica de empresas internacionais da área de farmácia, saúde e bem-estar, ajudando a implementar projetos internacionais no mercado brasileiro. Antes de ingressar na LexisNexis, Caio estagiou na Iteris Consultoria e trabalhou na área de analítica da AbbVie e Healthways. Possui Bacherelado em Sistemas de Informação pela EACH-USP.'
			},
			{
				'nome': 'Cássia Sanctos',
				'foto': 'cassia-sanctos',
				'descricao': 'Cássia Sanctos possui graduação em Filosofia pela PUC-SP, mestrado strictu sensu em Fundamentos da Matemática também pela PUC-SP e cursa o último ano de Sistemas de Informação na FIAP. Trabalhou na IBM como Business Analyst para sistemas de CIO Sales e agora trabalha como Developer em projetos de Watson para CIO no Holmes Squad'
			},
			{
				'nome': 'Cláudia Rosas',
				'foto': 'claudia-rosas',
				'descricao': 'Cláudia Rosas é Psicóloga formada na Universidade Metodista de São Paulo, com MBA em Gestão de Pessoas na FGV. Especialista em Recrutamento e Seleção de Profissionais de TI há 10 anos e gestão de equipes de alto desempenho, atualmente é a gestora responsável pelo time de Aquisição de Talentos da Consultoria <a href="http://www.conquestone.com.br" target="_blank"">Conquest One</a>.',
			},
			{
				'nome': 'Claudio Amaral',
				'foto': 'claudio-amaral',
				'descricao': 'Claudio Amaral é responsável pelas implantações das soluções tecnológicas de Big Data HPCC - LexisNexis Risk Solutions no Brasil. Ele começou na organização em 2001 com a Seisint, que foi adquirida pela LexisNexis em 2004. Antes de ingressar na LexisNexis, Claudio foi consultor na Breakaway Solutions e trabalhou em implementações e-commerce e CRM no Citibank, Janus Mutual Funds e The Travel Company. Além disso, possui Bacharelado em Engenharia de Computação pela Florida Atlantic University.'
			},
			{
				'nome': 'Diego Aranha',
				'foto': 'diego-aranha',
				'descricao': 'Diego Aranha é professor da Unicamp. Coordenou a primeira equipe capaz de detectar e explorar vulnerabilidades no software da urna eletrônica em testes controlados organizados pelo TSE. Tem experiência na área de Criptografia e Segurança Computacional, com ênfase em implementação eficiente de algoritmos criptográficos e análise de segurança de sistemas reais. É Bacharel em Ciência da Computação pela Universidade de Brasília (2005), Mestre (2007) e Doutor (2011) em Ciência da Computação pela Universidade Estadual de Campinas. Recebeu em 2015 os prêmios Google Latin America Research Award para pesquisa em privacidade e Inovadores com Menos de 35 Anos Brasil da MIT Technology Review por seu trabalho com o voto eletrônico.'
			},
			{
				'nome': 'Eduardo Bonini',
				'foto': 'eduardo-bonini',
				'descricao': 'Eduardo Bonini é designer de formação, especialista em branding e mestre em comunicação, comandou a agência de branding Fino Criativo de 2008 à 2015, quando passou à gerenciar a BTC e prestar consultoria à empreendedores.  Em paralelo, leciona empreendedorismo, marketing e branding na graduação e pós-graduação do Senac-SP',
			},
			{
				'nome': 'Erick Varzot',
				'foto': 'erick-varzot',
				'descricao': 'Erick Varzot é desenvolvedor de Games e Dungeon Master. Bacharel em Ciência da Computação na Universidade São Judas Tadeu, atua profissionalmente em TI desde 2012 e passou a trabalhar com Pesquisa e Desenvolvimento de Games desde 2013. É Cofundador da Etheral Flame Studios, empresa paulistana que desenvolveu o game Spaceship Overdrive, o qual foi premiado como “Melhor jogo para portáteis/mobile da Brasil Game Show 2015” pela Brazil Game Awards e foi semifinalista no BIG Festival 2016.'
			},
			{
				'nome': 'Fernanda Bernardo',
				'foto': 'fernanda-bernardo',
				'descricao': 'Fernanda Bernardo é formada em Sistemas de Informação pela USP e ama tecnologia. Trabalha tanto com back-end assim como front-end e também se interessa por assuntos relacionados a UX. Atualmente ela é desenvolvedora na Elo7 e dona do blog Diabetes mais doce.'
			},
			{
				'nome': 'Fernando Babadopulos',
				'foto': 'fernando-babadopulos',
				'descricao': 'Arquiteto de software, empresário e entusiasta de novas tecnologias, foi responsável pelo desenvolvimento de algumas das aplicações web mais conhecidas do Brasil e do exterior. Palestrante frequente em conferências nacionais e internacionais. Com mais de 15 anos de experiência na área de internet, é especialista na criação e concepção de sistemas de alto desempenho. Mestre em engenharia da informação pela Universidade Federal do ABC e bacharel em ciências da computação pelo Centro Universitário da FEI, hoje Fernando é CTO da Tail, a maior provedora de ciência de dados para o mercado publicitário do Brasil e que ganhou o Duke’s Choice Award 2015.'
			},			
			{
				'nome': 'Fernando Chamis',
				'foto': 'fernando-chamis',
				'descricao': 'Fernando Chamis é bacharel em Ciência da Computação e pós-graduado em e-business e Gestão Empresarial pelo Instituto Presbiteriano Mackenzie. Sócio-diretor da Webcore, empresa de desenvolvimento de soluções interativas fundada em 1999. Em 2007 criou também a divisão Webcore Games, responsável pela criação de jogos voltados para entretenimento, infantil e publicidade. Em 2016 lançou o jogo My Night Job para PlayStation4 e Steam. É também diretor da Abragames - Associação Brasileira dos Desenvolvedores de Jogos Digitais.'
			},
			{
				'nome': 'Fernando Massanori',
				'foto': 'fernando-massanori',
				'descricao': 'Fernando Massanori é professor da FATEC São José dos Campos, adora dar aulas, graduado em Computação pelo IME-USP, mestrado pelo ITA. Já desenvolveu projetos para Credicard Mastercard e Itaú BankBoston. Nos dois últimos anos deu mais de cem palestras e minicursos, na comunidade Python, viajando pelo Brasil e outros quinze países. É o criador do Python para Zumbis http://pycursos.com/python-para-zumbis/ Python é a sua desculpa para fazer amigos pelo mundo. Nos finais de semana ajuda em projetos sociais ligados à educação infantil. Os contatos dele você encontra em <a href="https://about.me/fmasanori" target="_blank">about.me/fmasanori</a>'
			},
			{
				'nome': 'Fernando Rychlewski',
				'foto': 'fernando-rychlewski',
				'descricao':'Fernando Rychlewski atua há mais de 16 anos como desenvolvedor curioso, um Nerd como ele mesmo diz e tem mais de 8 anos de experiência em Análise e Gerência de Projetos de Sistemas em arquiteturas Web/Cloud. Os 12 anos de experiência com design gráfico fizeram com que se tornasse CEO de uma gráfica, seu Hobbie. Hoje atua na elaboração de evoluções tecnológicas e arquiteturas em sistemas de grandes corporações no mercado, além disso é organizador e palestrante de eventos para a comunidade de desenvolvedores brasileiros (Google Developers São Paulo, NetCoders, iMasters, etc).'
			},
			{
				'nome': 'João Gabriel',
				'foto': 'joao-gabriel',
				'descricao': 'João Gabriel é consultor Pré Vendas, com MBA em Arquitetura de Soluções pela FIAP. Profissional com mais de 8 anos de experiência na área de TI com foco em tecnologias Microsoft, ele é especializado em SharePoint com sólidos conhecimentos em ASP.NET, Office 365 e Azure. Além disso, possui experiência em arquitetura e liderança de projetos de desenvolvimento e infraestrutura.'
			},
			{
				'nome': 'Gisele Craveiro',
				'foto': 'gisele-craveiro',
				'descricao':'Gisele S. Craveiro tem mestrado em Ciência da Computação pela Unicamp, doutorado em Engenharia Elétrica pela USP e é docente da EACH-USP desde 2005. Atua como coordenadora do grupo de pesquisa Colaboratório em Desenvolvimento e Participação (Colab-USP) e é pesquisadora de redes internacionais de pesquisa como a Iniciativa Latinoamericana por los Datos Abiertos e a Open Data Research Network.'
			},
			{
				'nome': 'Gustavo Silva',
				'foto': 'gustavo-silva',
				'descricao': 'Gustavo Silva é fundador da NutriSoft Brazil, startup que nasceu em 2013 durante o curso de Sistemas de Informação da USP com o objetivo de aproximar pacientes de nutricionistas, buscando tornar mais acessível os serviços e conteúdos sobre alimentação saudável. A empresa atingiu em 2015 a marca de 500.000 downloads e recebeu seu primeiro investimento do Grupo Abril, depois no Vale do Silício recebeu outra rodada de investimento. Hoje a NutriSoft conta com uma equipe de 8 pessoas, mais de 2.000.000 downloads e quer revolucionar o atendimento de pacientes crônicos no Brasil.'
			},
			{
				'nome': 'Heloisa Yoshioka',
				'foto': 'heloisa-yoshioka',
				'descricao': 'Heloisa Yoshioka é Product Owner na Tapps Games e Game Designer na Catavento Games. Formada em Design na FAU USP, já trabalhou com jogos para PC, web, mobile, tabuleiro, serious games, advergames, jogos educativos e de entretenimento.',
			},
			{
				'nome': 'Iana Chan',
				'foto': 'iana-chan',
				'descricao': 'Iana é graduada em Comunicação Social com habilitação em jornalismo pela ECA/USP, apaixonada por tecnologia e educação. É fundadora da PrograMaria, iniciativa que tem como missão empoderar mulheres por meio da tecnologia e da programação. Além disso, é Community Manager na Liga Ventures, primeira aceleradora totalmente dedicada a conectar startups e grandes empresas.'
			},
			{
				'nome': 'Jéssica Tauane',
				'foto': 'jessica',
				'descricao': 'Jessica é comunicóloga com ênfase em novas mídias pela PUC-SP e Youtuber dos canais \'Canal das Bee\' e \'Gorda de Boa\', canais focados em ativismo LGBT, empoderamento feminino e humor.'
			},
			{
				'nome': 'Jorge Vieira',
				'foto': 'jorge-vieira',
				'descricao': 'Jorge Vieira é um programador e entusiasta de agile que acabou se apaixonando por empreendedorismo. Bacharel em Ciência da Computação pela Universidade São Judas Tadeu, possui mais de seis anos de experiência em desenvolvimento de software, dos quais três são dedicados ao Desenvolvimento de Games. É Cofundador da Etheral Flame Studios, empresa paulistana que desenvolveu o game Spaceship Overdrive, o qual foi premiado como “Melhor jogo para portáteis/mobile da Brasil Game Show 2015” pela Brazil Game Awards e foi semifinalista no BIG Festival 2016.'
			},
			{
				'nome': 'Lucia Freitas',
				'foto': 'lucia-freitas',
				'descricao': 'Lucia Freitas é jornalista, blogueira, fundou o <a href="http://luluzinhacamp.com" target="_blank">LuluzinhaCamp</a>, primeiro grupo de mulheres da internet brasileira. Trabalha com produção de conteúdo para grandes empresas e milita pela igualdade de gêneros o tempo todo. '
			},
			{
				'nome': 'Luis Leão',
				'foto': 'luis-leao',
				'descricao': 'Engenheiro de inovação, é co-organizador do Google Developer Group São Paulo (GDG-SP) e membro do Garoa Hacker Clube. Viabiliza ideias factíveis com tecnologia, contribuindo em projetos open data, através da comunidade Transparência Hacker. Desenvolvedor desde 2000, criou o sms2blog: o primeiro gateway de SMS para Twitter no Brasil e atuou em agências digitais de marcas como Google, Coca-Cola, Nestlé, Itaucard, Fiat, GE, Globo Minas, Iveco, Usiminas, Vivo and Yamaha. Entre suas especialidades, estão Internet das Coisas, APIs, JavaScript, HTML, Arduino, Python e .Net'
			},
			{
				'nome': 'Márcio Ribeiro',
				'foto': 'marcio-ribeiro',
				'descricao': 'Márcio Moretto Ribeiro é professor de Sistemas de Informação na Escola de Artes e Humanidades da USP e pesquisador do Grupo de Políticas Públicas de Acesso à Informação. Sua tese de doutorado sobre revisão de crenças e lógicas de descrição, defendida em 2010, ganhou o prêmio de melhor tese do ano pela Sociedade Brasileira de Computação. Atualmente seus campos de estudo incluem privacidade, vigilância e a polarização do debate política nas redes sociais.'
			},
			{
				'nome': 'Paulo Kretcheu',
				'foto': 'paulo-roberto',
				'descricao': 'Paulo Roberto Alves de Oliveira, mais conhecido pelo apelido Kretcheu, é membro tradicional da comunidade de Software Livre e defensor do conhecimento livre e acessível a todos, possuindo diversas certificações como LPI-C, UCP, Novell NCLA e DCTS. Administrador de redes a mais de 15 anos e professor universitário há 25, é formado em Engenharia Mecânica e pós-graduado em auditoria e segurança. Além disso é o idealizador e apresentador do Vídeo Blog: <a href="http://Kretcheu.com.br" target="_blank">Kretcheu.com.br</a> desde 2009.'
			},
			{
				'nome': 'Pedro Shiguihara',
				'foto': 'pedro-shiguihara',
				'descricao': 'Pedro Shiguihara é coordenador do curso de Ciência da Computação na Universidade Peruana de Ciências Aplicadas (UPC). Possui bacharelado em Ciência da Computação pela Universidade Nacional de Trujillo e mestrado em Ciência da Computação pela USP. Além disso, é professor de inteligência artificial e programação na UPC.'
			},
			{
				'nome': 'Renato Stefani',
				'foto': 'renato-stefani',
				'descricao': 'Renato Stefani é Engenheiro Mecatrônico, especialista em futurismo e tecnologias exponenciais pela Singularity University. Um ser humano na busca infinita do equilíbrio entre mente, corpo e alma, Renato convida as pessoas a se entenderem a fundo, tornando-se hackers da própria vida. Além disso, é fundador do hacklife.co'
			},
			{
				'nome': 'Rosario Villalta',
				'foto': 'rosario-villalta',
				'descricao': 'Rosario Villalta é diretora de Sistemas de Informação, Engenharia de Software e Ciência da Computação na Universidade Peruana de Ciências Aplicadas (UPC). Possui mestrado em Ensino de Educação Superior pela Universidade Andres Bello do Chile, doutorado em Administração de Empresas pela Universidade Politécnica da Catalunya e MBA com especialização em Sistemas e Tecnologia da Informação pela ESAN.'
			},
			{
				'nome': 'Sérgio Lopes',
				'foto': 'sergio-lopes',
				'descricao': 'Sérgio Lopes é instrutor e desenvolvedor na <a href="https://www.caelum.com.br" target="_blank">Caelum</a> e no <a href="https://www.alura.com.br" target="_blank">Alura</a>. Especialista em front-end, especialmente nas áreas de mobile e performance. Publicou o livro <a href="http://sergiolopes.org/livro-web-mobile/" target="_blank">"A Web Mobile"</a> pela editora Casa do Código e é palestrante frequente em diversos eventos. Além disso, escreve sobre front e mobile em seu <a href="http://sergiolopes.org" target="_blank">blog</a> e  <a href="https://twitter.com/sergio_caelum" target="_blank">twitter</a>.'
			},
			{
				'nome': 'Suelen Carvalho',
				'foto': 'suelen',
				'descricao': 'Suelen Carvalho é pós-graduada pelo ITA e mestranda em Ciência da Computação pela USP. Trabalha com desenvolvimento de software há mais de 12 anos. Palestrante em diversos eventos de tecnologia sobre desenvolvimento Java, Android e agilidade. Atualmente começou a empreender e entrou como co-founder em uma startup mobile-first, é instrutora na Caelum, professora de MBA na FIAP e eventualmente escreve em seu blog <a href="http://www.suelengc.com" target="_blank">suelengc.com</a>'
			},
			{
				'nome': 'Thiago Araújo',
				'foto': 'thiago-araujo',
				'descricao': 'Thiago Araújo possui graduação em Ciência da Computação pela UNIP e quatro certificações na área de Banco de Dados e Analytics. Trabalhou com adminstração e integração de dados, ministrando diversos cursos na IBM relacionados à essa área. Atualmente trabalha como Developer em projetos de Watson para CIO no Holmes Squad.'
			}
		];
	})
	.controller('marcasCtrl', function($scope) {
		$scope.organizadores =
		[
			{
				'nome': 'Comissão Organizadora',
				'logo': 'img/logo_comissao.png',
				'url': 'https://www.facebook.com/SSIUSP'
			},
			{
				'nome': 'DASI',
				'logo': 'img/logo_dasi.jpg',
				'url': 'http://dasiusp.com'
			}
		];
		$scope.empresas =
		[
			{
				'nome': 'BTC',
				'logo': 'img/logo_btc.png',
				'url': 'http://www.btcompany.com.br'
			},
			{
				'nome': 'Conquest',
				'logo': 'img/logo_conquest.png',
				'url': 'http://www.conquestone.com.br/'
			},
			{
				'nome': 'Iteris',
				'logo': 'img/logo_iteris.png',
				'url': 'http://www.iteris.com.br'
			},
			{
				'nome': 'LexisNexis',
				'logo': 'img/logo_lexisNexis.png',
				'url': 'http://www.lexisnexis.com'
			},
			{
				'nome': 'SAS',
				'logo': 'img/logo_sas.png',
				'url': 'http://www.sas.com/pt_br/home.html'
			},
			{
				'nome': 'Caelum',
				'logo': 'img/logo_caelum.png',
				'url': 'http://www.caelum.com.br'
			}
		];
		$scope.apoiadores =
		[
			{
				'nome': 'Casa do Código',
				'logo': 'img/logo_casa_do_codigo.png',
				'url': 'https://www.casadocodigo.com.br/'
			},
			{
				'nome': 'Mãe Terra',
				'logo': 'img/logo_mae_terra.png',
				'url': 'http://www.maeterra.com.br'
			},
			{
				'nome': 'PRCEU',
				'logo': 'img/logo_prceu.png',
				'url': 'http://prceu.usp.br'
			},
			{
				'nome': 'EACH',
				'logo': 'img/logo_each.jpg',
				'url': 'http://www5.each.usp.br'
			},
			{
				'nome': 'USP',
				'logo': 'img/logo_usp.png',
				'url': 'http://www5.usp.br'
			}
		];
	});
