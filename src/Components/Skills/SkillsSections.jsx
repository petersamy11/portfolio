import React from 'react';

export default function SkillsSections({subHeading, skillsType}) {
  return (
    <div className="row text-center my-5">
    <div className="sub-heading my-4">
      <h4>{subHeading}</h4>
    </div>
    {skillsType.map(({ name, img }, index) => {
      return (
        <div key={index} className="col-lg-4 col-md-6 my-3">
          <img className="w-25" src={img} alt={name} />
          <p className="fs-5 mt-3">{name}</p>
        </div>
      );
    })}
  </div>
  )
}
