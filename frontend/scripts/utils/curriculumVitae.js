const curriculumVitae = {
  avatarUrl: '/static/images/me.jpeg',
  githubUrl: 'https://github.com/Ledoux',
  githubUsername: 'Ledoux',
  title: 'Hello, I am Erwan Ledoux',
  subtitle: 'Living for full-stack and dance',
  twitterUrl: 'https://twitter.com/_erwanledoux',
  twitterUsername: '@_erwanledoux',
  experiences: [
    {
      title: 'Web developer/tooler fullstack',
      date: '2015-2017',
      employer: 'Snips',
      link: 'https://snips.ai/'
    },
    {
      title: 'Postdoctoral research in the GNT (Group For Neural Theory)',
      date: '2013-2015',
      employer: 'Ecole Normale Supérieure (ENS) de la rue d\'Ulm',
      link: 'http://www.ens.fr/?lang=en',
      details: 'LNC (Laboratoire de Neurosciences cognitives), Inserm U960'
    },
    {
      title: 'Research and Teaching assistant (Demi ATER) in Physics',
      date: '2011-2013',
      employer: 'Université Paris Descartes',
      link: 'https://www.univ-paris5.fr',
      details: 'Neurophotonics Laboratory, UMR 8154, UMR-S 603'
    }
  ],
  education: [
    {
      title: 'PhD Computational Neuroscience at Université Paris Descartes',
      date: '2008-2011',
      info: 'Thesis : Dynamic of neural networks and application to the oscillations in the hippocampus',
      details: 'Centre de Neurophysique, Physiologie et Pathologie, UMR 8119, advisor : Nicolas Brunel'
    },
    {
      title: 'Master(M1,M2) in Neurosciences, Bachelor(L3) in Physics, Bachelor(L3) in Biologys',
      date: '2004-2008',
      info: 'ENS',
      details: 'Brandeis University, Waltham, USA, Marder Lab, advisor : Eve Marder'
    },
    {
      title: 'Preparatory class for high scientific schools',
      date: '2002-2004',
      info: 'Lycée Henri IV (Paris) BCPST : Biologie Chimie Physique et Sciences de la Terre'
    }
  ],
  projects: [{
      title: 'Desktop and Web productions',
      rawHTML: `
      <a class=\'curriculum-vitae-link\' target='_blank'
        href=\'https://snips.ai/content/intro-to-ai\' />
    Snips intro to ai</a>,
      <a class=\'curriculum-vitae-link\' target='_blank'
        href=\'https://snips.ai/\'>
        Snips official website</a>,
      <a class=\'curriculum-vitae-link\' target='_blank'
        href=\'https://docs.snips.ai/content/overview/0.0.2/manual/index.html\'>
        Snips SDK doc</a>,
      <a class=\'curriculum-vitae-link\' target='_blank'
        href=\'https://snips.ai/seeds/emotional-snapshot/\'>
        Snips emotional snapshot</a>,
      <a class=\'curriculum-vitae-link\' target='_blank'
        href='https://pariteaupouvoir.herokuapp.com/'>
        Parité au pouvoir</a>`
    },
    {
      title: 'Open Source Projects',
      rawHTML: `
        <a class=\'curriculum-vitae-link mr1\'
          href=\'https://medium.com/snips-ai/teleport-b4a20969b6f8#.10jhq64q7\'
          target='_blank'> Teleport</a>
        <a class=\'curriculum-vitae-link\'
          href=\'https://erwan_ledoux.gitbooks.io/transactions/content/read-me.html\'
          target='_blank'> Transactions</a>
        `
    },
    {
      title: 'Publications',
      rawHTML: `<a class=\'curriculum-vitae-link\' target='_blank'
      href=\'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3103906/\'>
      Dynamics of networks of excitatory and inhibitory neurons in
      response to time-dependent inputs </a>,
      <a class=\'curriculum-vitae-link\'
      href=\'https://arxiv.org/abs/1605.07977\' target='_blank'>
      Instability to a heterogeneous oscillatory
      state in randomly connected recurrent networks with delayed interactions </a>`
    },
    {
      title: 'Talks',
      rawHTML: `3.js (Snips Demo Day, January 2016),
      Modeling oscillations in the hippocampus
      (Paris Area Computational Neuroscience Day, ENS Paris, April 2012),
      When genes trigger agressive behaviour (Workshop on Neuroethics,
        ENS Paris, October 2010)`
    },
    {
      title: 'Teaching',
      rawHTML: `Tutorial class in Physics (P1, PAES Paris V, 2012)
Mathematics for biologists (M2, ENS Paris, 2010-201)
Practical class of Neurophysiology (L3, ENS Paris, 2009-2011)
Introduction to programming in C (L2, UPMC Paris VI, 2009)`
    }
  ],
  skills: [{
    title: 'Web Programming Full Stack',
    text: `node, npm, yarn, babel, webpack,
    gulp, react, react-native, angular, redux,
    redux-apollo, lodash, d3, leaflet, Sass,
    python, flask, socketio, wordpress, php`
  },
  {
    title: 'Infrastructure',
    text: `git, docker, jenkins, heroku,
    mongodb, rethinkdb`
  },
  {
    title: 'Modeling in Neurosciences',
    text: `C/C++, Brian, Matlab, scikit-learn,
    jupiter notebook, latex`
  },
  {
    title: 'Computational Music',
    text: 'MaxMSP, Ableton, Finale, Lilypond'
  }]
}

export default curriculumVitae
