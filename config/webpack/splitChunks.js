module.exports = {
    cacheGroups:{
        basicSupport:{
            name: 'basic-support',
            test: /court-basic-support[\w\/\\\-]|basic-support[\w\/\\\-]app[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        case:{
            name: 'case',
            test: /court-case[\w\/\\\-]|case[\w\/\\\-]app[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        caseDetail:{
            name: 'case-detail',
            test: /court-case-detail[\w\/\\\-]|case-detail[\w\/\\\-]app[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        examineApprove:{
            name: 'examine-approve',
            test: /court-examine-approve[\w\/\\\-]|examine-approve[\w\/\\\-]app[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        im:{
            name: 'im',
            test: /court-im[\w\/\\\-]|im[\w\/\\\-]app[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        instrumentComponent:{
            name: 'instrument-component',
            test: /court-instrument-component[\w\/\\\-]|instrument-component[\w\/\\\-]app[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        instrumentInfo:{
            name: 'instrument-info',
            test: /court-instrument-info[\w\/\\\-]|instrument-info[\w\/\\\-]app[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        instrumentForm:{
            name: 'instrument-form',
            test: /court-instrument-form[\w\/\\\-]|instrument-form[\w\/\\\-]app[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        legalInstrumentOpInfo:{
            name: 'legal-instrument-op-info',
            test: /court-legal-instrument-op-info[\w\/\\\-]|legal-instrument-op-info[\w\/\\\-]app[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        legalInstrumentOpTable:{
            name: 'legal-instrument-op-table',
            test: /court-legal-instrument-op-table[\w\/\\\-]|legal-instrument-op-table[\w\/\\\-]app[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        messageCenter:{
            name: 'message-center',
            test: /court-message-center[\w\/\\\-]|message-center[\w\/\\\-]app[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        personalSetting:{
            name: 'personal-setting',
            test: /court-personal-setting[\w\/\\\-]|personal-setting[\w\/\\\-]app[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        petitionLetter:{
            name: 'petition-letter',
            test: /court-petition-letter[\w\/\\\-]|petition-letter[\w\/\\\-]app[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        problemFeedback:{
            name: 'problem-feedback',
            test: /court-problem-feedback[\w\/\\\-]|problem-feedback[\w\/\\\-]app[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        share:{
            name: 'share',
            test: /court-share[\w\/\\\-]|share[\w\/\\\-]app[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        shareExchange:{
            name: 'share-exchange',
            test: /court-share-exchange[\w\/\\\-]|share-exchange[\w\/\\\-]app[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        statistics:{
            name: 'statistics',
            test: /court-statistics[\w\/\\\-]|statistics[\w\/\\\-]app[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        rjdCore:{
            name: 'rjd-core',
            test: /rjd[\w\/\\\-]res[\w\/\\\-]antd[\w\/\\\-]style[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        rjdAntPart1:{
            name: 'rjdAntPart1',
            test: /rjd(?![\w\/\\\-]res[\w\/\\\-]antd[\w\/\\\-]style)[\w\/\\\-]+res[\w\/\\\-]+antd[\w\/\\\-][a-n][\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        rjdAntPart2:{
            name: 'rjdAntPart2',
            test: /rjd(?![\w\/\\\-]res[\w\/\\\-]antd[\w\/\\\-]style)[\w\/\\\-]+res[\w\/\\\-]+antd[\w\/\\\-][o-z][\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        rjd:{
            name: 'rjd',
            test: /rjd[\w\/\\\-]+res[\w\/\\\-]+business|rjd[\w\/\\\-]+res[\w\/\\\-]+own[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        antd:{
            name: 'antd',
            test: /node_modules[\w\/\\\-]+antd[\w\/\\\-]es[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
        rjLib:{
            name: 'rj-lib',
            test: /rj-lib[\w\/\\\-]+\.less$/,
            chunks: 'all',
            enforce: true
        },
    }
};