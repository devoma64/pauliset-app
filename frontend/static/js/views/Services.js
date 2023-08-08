import AbstractView from "./AbstractView.js"

export default class extends AbstractView{
    constructor () {
        super();
        this.setTile("Service");
    }

    async getHtml() {
        return `
        
        <!--Testimonials Start-->
        <section class="testimonials-section">
          <h1 class="text-center">What People Says</h1>
          <div class="container">
             <div class="row">
                <div class="col-md-12">
                   <div id="h3testimonials" class="owl-carousel owl-theme">
                      <!--testimonials box start-->
                      <div class="item">
                         <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, making it look like readable. </p>
                         <div class="tuser"> <img src="/static/images/tuser1.jpg" alt=""> <strong>Danny Scotten</strong> Florida Partner </div>
                      </div>
                      <!--testimonials box End--> 
                      <!--testimonials box start-->
                      <div class="item">
                         <p> As opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. </p>
                         <div class="tuser"> <img src="/static/images/tuser2.jpg" alt=""> <strong>Richardson</strong> Florida Partner </div>
                      </div>
                      <!--testimonials box End--> 
                      <!--testimonials box start-->
                      <div class="item">
                         <p> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour. </p>
                         <div class="tuser"> <img src="/static/images/tuser3.jpg" alt=""> <strong>Anna Lillian</strong> Florida Partner </div>
                      </div>
                      <!--testimonials box End--> 
                      <!--testimonials box start-->
                      <div class="item">
                         <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, making it look like readable. </p>
                         <div class="tuser"> <img src="/static/images/tuser1.jpg" alt=""> <strong>Danny Scotten</strong> Florida Partner </div>
                      </div>
                      <!--testimonials box End--> 
                      <!--testimonials box start-->
                      <div class="item">
                         <p> As opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. </p>
                         <div class="tuser"> <img src="/static/images/tuser2.jpg" alt=""> <strong>Richardson</strong> Florida Partner </div>
                      </div>
                      <!--testimonials box End--> 
                      <!--testimonials box start-->
                      <div class="item">
                         <p> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour. </p>
                         <div class="tuser"> <img src="images/tuser3.jpg" alt=""> <strong>Anna Lillian</strong> Florida Partner </div>
                      </div>
                      <!--testimonials box End--> 
                   </div>
                </div>
             </div>
          </div>
       </section>
       <!--Testimonials End--> 
       
       <!--Testimonials Start-->
       <div class="testimonials-section bg-white wf100 p80">
          <div class="container">
             <div class="row">
                <div class="col-md-12">
                   <div id="testimonials" class="owl-carousel owl-theme">
                      <!--testimonials box start-->
                      <div class="item">
                         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem sum is that it has a more or less normal distribution.</p>
                         <div class="tuser"> <img src="images/tuser1.jpg" alt=""> <strong>Danny Scotten</strong> Florida Partner </div>
                      </div>
                      <!--testimonials box End--> 
                      <!--testimonials box start-->
                      <div class="item">
                         <p>As opposed to using 'Content here, content here', making it look like readable English. Many Desktop and Web Pages are using lorem ipsum.</p>
                         <div class="tuser"> <img src="images/tuser2.jpg" alt=""> <strong>Richardson</strong> Florida Partner </div>
                      </div>
                      <!--testimonials box End--> 
                      <!--testimonials box start-->
                      <div class="item">
                         <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                         <div class="tuser"> <img src="images/tuser3.jpg" alt=""> <strong>Anna Lillian</strong> Florida Partner </div>
                      </div>
                      <!--testimonials box End--> 
                      <!--testimonials box start-->
                      <div class="item">
                         <p>Those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain.</p>
                         <div class="tuser"> <img src="images/tuser1.jpg" alt=""> <strong>Danny Scotten</strong> Florida Partner </div>
                      </div>
                      <!--testimonials box End--> 
                      <!--testimonials box start-->
                      <div class="item">
                         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem sum is that it has a more or less normal distribution.</p>
                         <div class="tuser"> <img src="images/tuser1.jpg" alt=""> <strong>Danny Scotten</strong> Florida Partner </div>
                      </div>
                      <!--testimonials box End--> 
                      <!--testimonials box start-->
                      <div class="item">
                         <p>As opposed to using 'Content here, content here', making it look like readable English. Many Desktop and Web Pages are using lorem ipsum.</p>
                         <div class="tuser"> <img src="images/tuser2.jpg" alt=""> <strong>Richardson</strong> Florida Partner </div>
                      </div>
                      <!--testimonials box End--> 
                      <!--testimonials box start-->
                      <div class="item">
                         <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                         <div class="tuser"> <img src="images/tuser3.jpg" alt=""> <strong>Anna Lillian</strong> Florida Partner </div>
                      </div>
                      <!--testimonials box End--> 
                      <!--testimonials box start-->
                      <div class="item">
                         <p>Those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain.</p>
                         <div class="tuser"> <img src="images/tuser1.jpg" alt=""> <strong>Danny Scotten</strong> Florida Partner </div>
                      </div>
                      <!--testimonials box End--> 
                      <!--testimonials box start-->
                      <div class="item">
                         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem sum is that it has a more or less normal distribution.</p>
                         <div class="tuser"> <img src="images/tuser1.jpg" alt=""> <strong>Danny Scotten</strong> Florida Partner </div>
                      </div>
                      <!--testimonials box End--> 
                      <!--testimonials box start-->
                      <div class="item">
                         <p>As opposed to using 'Content here, content here', making it look like readable English. Many Desktop and Web Pages are using lorem ipsum.</p>
                         <div class="tuser"> <img src="images/tuser2.jpg" alt=""> <strong>Richardson</strong> Florida Partner </div>
                      </div>
                      <!--testimonials box End--> 
                      <!--testimonials box start-->
                      <div class="item">
                         <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                         <div class="tuser"> <img src="images/tuser3.jpg" alt=""> <strong>Anna Lillian</strong> Florida Partner </div>
                      </div>
                      <!--testimonials box End--> 
                      <!--testimonials box start-->
                      <div class="item">
                         <p>Those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain.</p>
                         <div class="tuser"> <img src="images/tuser1.jpg" alt=""> <strong>Danny Scotten</strong> Florida Partner </div>
                      </div>
                      <!--testimonials box End--> 
                   </div>
                </div>
             </div>
          </div>
       </div>
       <!--Testimonials End--> 
        `
    }
}