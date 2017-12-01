import React from 'react'

import curriculumVitae from '../../utils/curriculumVitae'

const CurriculumVitae = ({ avatarUrl,
  education,
  experiences,
  githubUrl,
  githubUsername,
  projects,
  skills,
  subtitle,
  title,
  twitterUrl,
  twitterUsername
}) => {
  return (
    <div className='curriculum-vitae'>
      <a className='btn btn-primary curriculum-vitae-button'
        href='/resume' target='_blank' type='button'>
        Download
      </a>
      <div className='curriculum-vitae__avatar'>
        <img
          className='curriculum-vitae__avatar__img'
          src={avatarUrl}
        />
      </div>
      <div className='curriculum-vitae__title mb1'>
        {title}
      </div>
      <div className='curriculum-vitae__subtitle mb1'>
        {subtitle}
      </div>
      <div className='curriculum-vitae__links flex items-center justify-center'>
        <a className='curriculum-vitae__links__child mr2'
          href={twitterUrl}
          target='_blank'
        >
          {twitterUsername}
        </a>
        <a className='curriculum-vitae__links__child flex items-center'
          href={githubUrl}
          target='_blank'
        >
          <img className='curriculum-vitae__links__child__img mr1'
            src='/static/images/github.png' />
          {githubUsername}
        </a>
      </div>

      <div className='curriculum-vitae-section' >
        <div className='curriculum-vitae-section--left curriculum-vitae-section-experience col md-col-7'>
          <div className='curriculum-vitae-section__title curriculum-vitae-section__title-experience'>
            EXPERIENCE
          </div>
          <div className='curriculum-vitae-section__container curriculum-vitae-section__container--experiences'>
            {
              experiences.map(({
                title,
                date,
                employer,
                link,
                details
              }, index) => (
                <div className='curriculum-vitae-item'
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
                </div>
              ))
            }
          </div>
        </div>
        <div className='curriculum-vitae-section--right col md-col-5'>
          <div className='curriculum-vitae-section__title'>
            EDUCATION
          </div>
          <div className='curriculum-vitae-section__container'>
            {
              education.map(({title, date, info}, index) => (
                <div className='curriculum-vitae-section__container__item'
                  key={index}>
                  <div className='curriculum-vitae-item__title'>
                    {title}
                  </div>
                  <div className='curriculum-vitae-item__details'>
                    {date} {info}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className='curriculum-vitae-section' >
        <div className='curriculum-vitae-section--left col md-col-7'>
          <div className='curriculum-vitae-section__title'>
            PROJECTS & TALKS
          </div>
          <div className='curriculum-vitae-section__container'>
            {
              projects.map(({title, date, rawHTML}, index) => (
                <div className='curriculum-vitae-section__container__item'
                key={index}>
                  <div className='curriculum-vitae-item__title'>
                    {title}
                  </div>
                  <div
                    className='curriculum-vitae-item__details'
                    dangerouslySetInnerHTML={{__html: rawHTML}}
                  />
                </div>
              ))
            }
          </div>
        </div>
        <div className='curriculum-vitae-section--right curriculum-vitae-section-skills col md-col-5'>
          <div className='curriculum-vitae-section__title curriculum-vitae-section__title-skills'>
            SKILLS
          </div>
          <div className='curriculum-vitae-section__container curriculum-vitae-section__container'>
            {
              skills.map(({title, text}, index) => (
                <div className='curriculum-vitae-section__container__item curriculum-vitae-item'
                key={index}>
                  <div className='curriculum-vitae-item__title'>
                    {title}
                  </div>
                  <div className='curriculum-vitae-item__details curriculum-vitae-item__details--skill'>
                    {text}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

CurriculumVitae.defaultProps = curriculumVitae

export default CurriculumVitae
