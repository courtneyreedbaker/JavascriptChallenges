<script>
            //toggleProjects
            var toggleProjects = function(){

              //create functions
              var projectsList = document.getElementsByClassName('projects');
              var changeIcon = document.querySelector('#toggleTitle i');

              // if(projectsList[0].style.display=='none'){
              if(!projectsList[0].classList.contains('projectsClass')){
                //changeIcon down
                changeIcon.classList.remove('fa-angle-right');
                changeIcon.classList.add('fa-angle-down');
                //reappear
                for(var i=0; i<projectsList.length; i++){
                  // projectsList[i].style.display='';
                  projectsList[i].classList.add('projectsClass');
                  projectsList[i].classList.remove('projectsClass2');
                }

              } else {
                //changeIcon right
                changeIcon.classList.remove('fa-angle-down');
                changeIcon.classList.add('fa-angle-right');

                //remove class fa-angle-down and add fa-angle-up
                //disappear
                for(var i=0; i<projectsList.length; i++){
                  // projectsList[i].style.display='none';
                  projectsList[i].classList.add('projectsClass2');
                  projectsList[i].classList.remove('projectsClass');
                }

              }
            };

            //event listener for click
            document.getElementById('toggleTitle').addEventListener('click', toggleProjects);
          </script>