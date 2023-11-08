import React from "react";

export default function LeftSidebar() {


    return (
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white ">
           <div class="scrollable-sidebar">
            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                <li class="nav-item">
                    <a href="#" class="nav-link align-middle px-0">
                        <i class="bi bi-house-door"></i><span class="ms-1 d-none d-sm-inline text-capitalize">home</span>
                    </a>
                </li>
                
                <li>
                    <a href="#" class="nav-link px-0 align-middle">
                        <i class="bi bi-music-note-list"></i> <span class="ms-1 d-none d-sm-inline text-capitalize">playlists</span></a>
                </li>
                <li>
                    <a href="#" class="nav-link px-0 align-middle">
                        <i class="bi bi-bar-chart"></i> <span class="ms-1 d-none d-sm-inline text-capitalize">statistics</span></a>
                </li>
                <hr/>
                <li class="menu-header small text-capitalize pb-2">
                    <span class="menu-header-text text-white-50"> YOUR MUSIC</span>
                   
                  </li>
                  
                <li>
                    <a href="#" class="nav-link px-0 align-middle">
                        <i class="bi bi-heart"></i> <span class="ms-1 d-none d-sm-inline text-capitalize">favorites</span></a>
                </li>
                <li>
                    <a href="#" class="nav-link px-0 align-middle">
                        <i class="bi bi-clock"></i><span class="ms-1 d-none d-sm-inline text-capitalize"> listen later</span></a>
                </li>
                <li>
                    <a href="#" class="nav-link px-0 align-middle">
                        <i class="bi bi-calendar3"></i> <span class="ms-1 d-none d-sm-inline text-capitalize">history</span></a>
                </li>
                <li>
                    <a href="#" class="nav-link px-0 align-middle">
                        <i class="bi bi-mic"></i> <span class="ms-1 d-none d-sm-inline text-capitalize">podcasts</span></a>
                </li>
                <hr/>

                <li class="menu-header small text-capitalize pb-2">
                    <span class="menu-header-text text-white-50"> YOUR PLAYLISTS</span>
                   
                  </li>
                  
                  
                <div>
                <li>
                    <a href="#" class="nav-link px-0 align-middle">
                        <i class="bi bi-music-note"></i> <span class="ms-1 d-none d-sm-inline text-capitalize"> Disco</span></a>
                </li>
                <li>
                    <a href="#" class="nav-link px-0 align-middle">
                        <i class="bi bi-music-note"></i> <span class="ms-1 d-none d-sm-inline text-capitalize"> Electro</span></a>
                </li>
                
                </div>
                <li>
                    <a href="#" class="nav-link px-0 align-middle ">
                     <span class="ms-1 d-none d-sm-inline text-capitalize craete_new_playlists">Create new playlists +</span></a>
                </li>
                
            </ul>
           </div>
        
           
        </div>
    </div>
    
    )

}