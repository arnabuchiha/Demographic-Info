import React from 'react'

const SignIn=({onRouteChange})=>{
    return(
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5" style={{boxShadow: "2px 2px 5px #888888"}}>
				<div className="center">
					<main className="pa4 black-80">
					  <div className="measure">
						    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						      <legend className="f1 fw6 ph0 white mh0">Sign In</legend>
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
						    <div className="">
						      <input onClick={()=>onRouteChange("home")} className="b ph3 pv2 input-reset ba b--gray white bg-transparent grow pointer f5 dib" type="submit" value="Sign in" />
						    </div>
						    {/* <div id='incorrect' className="hidden lh-copy mt3">
						    	Invalid credentials
						    </div> */}
						    <div className="lh-copy mt3">
						      <a href="#0" onClick={() => onRouteChange('register')} className="f5 link dim white db">Register</a>
						    </div>
					  	</div>
					</main>
				</div>
			</article>

    )
}
export default SignIn;