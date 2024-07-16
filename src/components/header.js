import React from 'react';

function Header() {
  return (
    <>
			<div class="header-area">			
			    <nav class="navbar navbar-default bootsnav navbar-fixed dark no-background">
			        <div class="container-fluid">

			          
			            <div class="navbar-header">
			                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
			                    <i class="fa fa-bars"></i>
			                </button>
			                <a class="navbar-brand" href="index.html">Vishnu's Portfolio</a>
			            </div>
			       
			            <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
			                <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
			                <li class=" smooth-menu active"></li>
							<li class=" smooth-menu"><a href="#about">Me</a></li>
			                    <li class=" smooth-menu"><a href="#education">education</a></li>
			                    <li class="smooth-menu"><a href="#skills">skills</a></li>
								<li class="smooth-menu"><a href="#profiles">Vision</a></li>
			                    <li class="smooth-menu"><a href="#portfolio">Projects</a></li>
			                    <li class="smooth-menu"><a href="#contact">contact</a></li>
			                </ul>
			            </div>
			        </div>
			    </nav>
			  
			</div>
    </>
  );
}

export default Header;