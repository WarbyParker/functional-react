import React, { PropTypes } from 'react'

const TeamMember = ({member}) => {
  return (
    <li>
      <h2>{member.name}</h2>
      <p>{member.title}</p>
      <blockquote>{member.quote}</blockquote>
    </li>
  )
}

TeamMember.propTypes = {
  member: PropTypes.object
}

const Main = ({title, teamMembers}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <ul>
          { teamMembers.map((member, i) => <TeamMember key={i} member={member} />) }
        </ul>
      </div>
    </div>
  )
}

Main.propTypes = {
  title: PropTypes.string,
  teamMembers: PropTypes.array
}

export default Main
