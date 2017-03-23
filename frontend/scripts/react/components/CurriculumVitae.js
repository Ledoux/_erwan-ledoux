import React from 'react'
//http://stackoverflow.com/questions/18191893/generate-pdf-from-html-in-div-using-javascript

const content = {
  avatarUrl: '/static/images/me.jpeg',
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
      title: 'Open Source Project',
      rawHTML: `<a class=\'curriculum-vitae-link\'
      href=\'https://github.com/snipsco/teleport\' target='_blank'> Teleport </a>
      (and its <a class=\'curriculum-vitae-link\' target='_blank'
      href='https://medium.com/snips-ai/teleport-b4a20969b6f8#.10jhq64q7'> medium</a>)`
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


const CurriculumVitae = ({
  avatarUrl,
  title,
  subtitle,
  twitterUrl,
  twitterUsername,
  experiences,
  education,
  projects,
  skills
}) => {
  return (
    <div className="curriculum-vitae">
      <a className='btn btn-primary curriculum-vitae-button '
        href='/resume' target='_blank' type='button'>
        Download
      </a>
      <div className="curriculum-vitae__avatar">
        <img
          className='curriculum-vitae__avatar__img'
          src={avatarUrl}
        />
      </div>
      <p className='curriculum-vitae__title'>
        {title}
      </p>
      <p className='curriculum-vitae__subtitle'>
        {subtitle}
      </p>
      <div className='curriculum-vitae__twitter'>
        <a className='curriculum-vitae__twitter__a'
          href={twitterUrl}
          target='_blank'
        >
          {twitterUsername}
        </a>
      </div>

      <div className='curriculum-vitae-section' >
        <div className='curriculum-vitae-section--left curriculum-vitae-section-experience col md-col-7'>
          <p className='curriculum-vitae-section__title curriculum-vitae-section__title-experience'>
            EXPERIENCE
          </p>
          <div className='curriculum-vitae-section__container curriculum-vitae-section__container--experiences'>
            {
              experiences.map(({
                title,
                date,
                employer,
                link,
                details
              }, index) => (<div
                className='curriculum-vitae-item'
                key={index}>
                  <div className='curriculum-vitae-item__title'>
                    {title}
                  </div>
                  <div className='curriculum-vitae-item__content'>
                    {date} <a className='curriculum-vitae-link' href={link} target='_blank'>
                    {employer}
                  </a>
                  </div>
                  <div className='curriculum-vitae-item__details'>
                    {details}
                  </div>
              </div>))
            }
          </div>
        </div>
        <div className='curriculum-vitae-section--right col md-col-5'>
          <p className='curriculum-vitae-section__title'>
            EDUCATION
          </p>
          <div className='curriculum-vitae-section__container'>
            {
              education.map(({title, date, info}, index) => (<div
                className='curriculum-vitae-section__container__item'
                key={index}>
                  <div className='curriculum-vitae-item__title'>
                    {title}
                  </div>
                  <div className='curriculum-vitae-item__details'>
                    {date} {info}
                  </div>
              </div>))
            }
          </div>
        </div>
      </div>

      <div className='curriculum-vitae-section' >
        <div className='curriculum-vitae-section--left col md-col-7'>
          <p className='curriculum-vitae-section__title'>
            PROJECTS & TALKS
          </p>
          <div className='curriculum-vitae-section__container'>
            {
              projects.map(({title, date, rawHTML}, index) => (<div
                className='curriculum-vitae-section__container__item'
                key={index}>
                  <div className='curriculum-vitae-item__title'>
                    {title}
                  </div>
                  <div
                    className='curriculum-vitae-item__details'
                    dangerouslySetInnerHTML={{__html: rawHTML}}
                  />
              </div>))
            }
          </div>
        </div>
        <div className='curriculum-vitae-section--right curriculum-vitae-section-skills col md-col-5'>
          <p className='curriculum-vitae-section__title curriculum-vitae-section__title-skills'>
            SKILLS
          </p>
          <div className='curriculum-vitae-section__container curriculum-vitae-section__container'>
            {
              skills.map(({title, text}, index) => (<div
                className='curriculum-vitae-section__container__item curriculum-vitae-item'
                key={index}>
                <div className='curriculum-vitae-item__title'>
                  {title}
                </div>
                <div className='curriculum-vitae-item__details curriculum-vitae-item__details--skill'>
                  {text}
                </div>
              </div>))
            }
          </div>
        </div>
      </div>

    </div>
  )
}

CurriculumVitae.defaultProps = content

export default CurriculumVitae
