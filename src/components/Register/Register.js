import React from 'react'

const Register=({onRouteChange})=>{
    return(
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5" style={{boxShadow: "2px 2px 5px #888888"}}>
				<div className="center">
					<main className="pa4 black-80">
					  <div className="measure">
						    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						      <legend className="f1 fw6 ph0 white mh0">Register</legend>
                              <div className="mt3">
						        <label className="db fw6 lh-copy white f5" htmlFor="name">Name</label>
						        <input className="b pa2 input-reset ba b--white bg-black white hover-bg-black hover-white w-100" 
						        type="text" 
						        name="name"  
						        id="name"	/>
						      </div>
						      <div className="mt3">
						        <label className="db fw6 lh-copy white f5" htmlFor="email-address">Email</label>
						        <input className="b pa2 input-reset ba b--white bg-black white hover-bg-black hover-white w-100" 
						        type="email" 
						        name="email-address"  
						        id="email-address"	/>
						      </div>
						      <div className="mv3">
						        <label className="db fw6 lh-copy white f5" htmlFor="password">Password</label>
						        <input className="b pa2 input-reset ba b--white bg-black white hover-bg-black hover-white w-100" 
						        type="password" 
						        name="password"  
						        id="password" />
						      </div>
						    </fieldset>
						    {/* <div id='incorrect' className="hidden lh-copy mt3">
						    	Invalid credentials
						    </div> */}
						    <div className="lh-copy mt3">
						      <a href="#0" onClick={() => onRouteChange('home')} className="f5 link dim white db">Register</a>
						    </div>
					  	</div>
					</main>
				</div>
			</article>

    )
}
export default Register;