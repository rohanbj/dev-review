import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {


  const [index , setindex ]=useState(0);
  const{name,id,job,image,text}=people[index]


  const check =(number)=>{
    if(number >people.length-1){
      return 0;
    }
    if(number<0){
      return people.length-1;
    }
    return (number);
  }

  const prevperson =()=>{
  setindex((index)=>{

    let newindex=index-1;
    return check (newindex);
  })
  
  
  
  }
  const nextperson=()=>{
setindex((index)=>{
  let newindex=index+1;
  return check(newindex);
})


  }
  const random=()=>{

    
   setindex(Math.floor(Math.random() * 4) )

  }
  
  return (
    <article className='review'>
    <div className='img-container'>

      <img src={image} alt={name} className='person-img'/>

      <span  className='quote-icon'>
<FaQuoteRight/>



</span>
    </div>

<h4 className='author'>{name}</h4>
<p className='job'>{job}</p>
<p className='info'>{text}</p>
{/* <h2 className='id'>{id}</h2> */}
<button className='prev-btn' onClick={prevperson}><FaChevronLeft/></button>
<button className='next-btn' onClick={nextperson}><FaChevronRight/></button>


<button className='random-btn' onClick={random}>surprise me</button>
    </article>

  )
};

export default Review;
