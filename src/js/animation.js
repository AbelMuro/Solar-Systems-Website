import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function index_file_animation() {
    gsap.from(".slide_in_left", {
        x: -800,
        duration: 1,
        ease: "back.out(1.7)"
    });
    gsap.from(".slide_in_right", {
        x: 800,
        duration: 2,
        ease: "back.out(1.7)",
    })
    gsap.from(".fade_in_first", {
        scrollTrigger: {
            trigger: ".fade_in_first",
            start: "top 65%",
            end: "top 45% ",
            scrub: 1,
            markers: false
        },
        opacity: 0
    });
    gsap.from(".fade_in_second", {
        scrollTrigger: {
            trigger: ".fade_in_second",
            start: "top 65%",
            end: "top 45% ",
            scrub: 1,
            markers: false
        },
        opacity: 0,       
    });
    gsap.from(".fade_in_third", {
        scrollTrigger: {
            trigger: ".fade_in_third",
            start: "top 65%",
            end: "top 45% ",
            scrub: 1,
            markers: false
        },
        opacity: 0       
    });

//planet animation
    gsap.timeline({
        scrollTrigger: {
        trigger: ".planet_animation",
        start: "40% 65%",
        end: "40% 65%",
        markers: false
    }})
    .to(".sun", {
        x: 0,
        duration: 1
    })
    .to(".mercury", {
        x: 0,
    })
    .to(".venus", {
        x: 0,
    })
    .to(".earth", {
        x: 0,   
    })
    .to(".mars", {
        x: 0,
    })
    .to(".jupiter", {
        x: 0,
    })
    .to(".saturn", {
        x: 0,
    })
    .to(".uranus", {
        x: 0,
    })
    .to(".neptune", {
        x: 0,
    });

//White Text container that is below the planets
    gsap.from(".fade_in_fourth", {
        scrollTrigger: {
            trigger: ".fade_in_fourth",
            start: "top 95%",
            end: "top 55% ",
            scrub: 1,
            markers: false  
        },
        opacity: 0
    });
}

 export function mercury_file_animation() {
    gsap.timeline({
        scrollTrigger : {
            trigger: ".mercury_animation",
            start: "-20% 0%",
            end: "-20% 0%",
            markers: false
    }})
    .from(".mercury_zooming_in", {   
        x: -1200,
        duration: 1.5
    })
    .to(".mercury_zooming_in", {
        width: "+=2500",
        height: "+=2500",
        duration: 1.5
    })
    .to(".mercury_surface", {
        opacity: 1,
    })       
    .to(".mercury_zooming_in", {
        opacity: 0,
    })
    .set(".mercury_zooming_in", {
        attr: {src: ""}
    })    
    .to(".text_box_mercury_one", {
        opacity: 1
    })
    .to(".text_box_mercury_two", {
        opacity: 1
    });
}

 export function change_to_night_mercury() {
    let newHTML = "So this is it, the dark side of the planet." +
    "Naturally, there would be much less light that what you see now," +
    "but for the purpose of this presentation, we added a little bit of light." +
    "As we stated before, Mercury experiences the most extreme changes in temperature," +
    "when the planet turns away from the sun, the temperature drops to -220 degrees fahrenheit"

    let new_HTML = "The dark side of the planet is pretty boring IMHO," +
    "if you want to go back to the sunny part of the planet, click the button below" +
    "<br><br>" + "<button type='button' class='btn_day' onclick='window.change_to_day_mercury()'>" +
    "Day Time </button>"

    gsap.timeline()
    .to(".sun_background_mercury", {
        opacity: 0,
    })
    .to(".text_box_mercury_one", {
        opacity: 0
    })
    .to(".text_box_mercury_two", {
        opacity: 0
    })   
    .to(".mercury_surface", {
        opacity: 0,
    })
    .set(".mercury_surface", {
        attr: {src: "mercury surface dark.png"}
    })
    .set(".text_box_mercury_one", {
        innerHTML: newHTML,
        attr: {class: "text_containers_white text_box_mercury_one transitioning_fast"}
    })
    .set(".text_box_mercury_two", {
        innerHTML: new_HTML,
        attr: {class: "text_containers_white text_box_mercury_two transitioning_fast"}
    })    
    .to(".mercury_surface", {
        opacity: 1
    })
    .to(".text_box_mercury_one", {
        opacity: 1
    })
    .to(".text_box_mercury_two", {
        opacity: 1
    });

}

 export function change_to_day_mercury() {
    let oldHTML = "This is what humans expect Mercury would look like "+
    "on the surface, the sun would look 3 times larger than " +
    "what we see on earth, and the surface would be completely " +
    "barren and completely damaged from meteorites and the strong " +
    "solar wind coming from the sun. The sky is expected to be " +
    "black with stars.";

    let old_HTML = "This is just the side facing the sun, if you want to see the " +
    "side of the surface of the planet that is facing away from the sun, " +
    "click the button below..<br><br>" +
    "<button type='button' class='btn_night' onclick='window.change_to_night_mercury()'> Night Time </button>";

    gsap.timeline()
    .to(".mercury_surface", {
        opacity: 0
    })
    .set(".mercury_surface", {
        attr: {src: "mercury_surface.png"}
    })
    .to(".text_box_mercury_one", {
        opacity: 0
    })
    .to(".text_box_mercury_two", {
        opacity: 0
    })
    .set(".text_box_mercury_one", {
        innerHTML: oldHTML,
        attr: {class: "text_containers_orange text_box_mercury_one transitioning_fast"}
    })
    .set(".text_box_mercury_two", {
        innerHTML: old_HTML,
        attr: {class: "text_containers_orange text_box_mercury_two transitioning_fast"}
    })
    .to(".sun_background_mercury", {
        opacity: 1
    })
    .to(".mercury_surface" , {
        opacity: 1
    })
    .to(".text_box_mercury_one", {
        opacity: 1
    })
    .to(".text_box_mercury_two", {
        opacity: 1
    });
}

 export function venus_file_animation() {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".venus_container",
            start: "-20% 0%",
            end: "-20% 0%",
            markers: false
        }
    })
    .from(".venus_planet", {
        x: "-1000",
        duration: 1.5
    })    
    .to(".venus_planet" ,{
        width: "+=2500",
        height: "+=2500",
        duration: 1.2
    })
    .to(".sun_background_for_venus", {
        opacity: 0
    })    
    .set(".venus_container", {
        backgroundImage: "url('venus surface.png')",
        backgroundSize: "cover"
    })
    .to(".venus_planet", {
        opacity: 0,
        zIndex: -1
    })
    .to(".text_info_box_venus_one", {
        opacity: 1
    });

}

 export function earth_file_animation() {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".earth_container",
            start: "-5% 0%",
            end: "-5% 0%",
            markers: false
        }
    })
    .to(".earth_planet", {
        width: "+=2500",
        height:"+=2500",
        duration: 2
    })
    .set(".earth_container", {
        backgroundImage: "url('earth surface.jpg')",
        backgroundSize: "cover"
    })
    .to(".earth_planet", {
        opacity: 0,
        zIndex: -1
    })
    .to(".text_info_box_earth_one", {
        opacity: 1
    })
    .to(".text_info_box_earth_two", {
        opacity: 1
    });
}

 export function change_to_night_earth() {
    let newHTML = "The night sky is just as beautiful " +
    "as the the day time sky. Millions of stars in every " +
    "corner of the sky. There may be less light, but there isn't " +
    "less beauty at this time of the planet";

    let new_HTML = "Click the button below if you want to return to " +
    "the day time of earth..." + "<br><br>" +
    "<button class='btn_day' onclick='window.change_to_day_earth()'> Day Time </button>";

    gsap.timeline()
    .to(".text_info_box_earth_one", {
        opacity: 0
    })
    .to(".text_info_box_earth_two", {
        opacity: 0
    })    
    .to(".earth_container", {
        opacity: 0
    })
    .set(".text_info_box_earth_one", {
        innerHTML: newHTML,
        attr: {class: "text_containers_white text_info_box_earth_one transitioning_fast"}
    })     
    .set(".text_info_box_earth_two", {
        innerHTML: new_HTML,
        attr: {class: "text_containers_white text_info_box_earth_two transitioning_fast"}
    })      
    .set(".earth_container", {
        backgroundImage: "url('earth night.jpg')",
        backgroundSize: "cover"
    })    
    .to(".earth_container", {
        opacity: 1
    })    
    .to(".text_info_box_earth_one", {
        opacity: 1
    })
    .to(".text_info_box_earth_two", {
        opacity: 1
    });
}

 export function change_to_day_earth() {
    let oldHTML = "Beautiful isn't it? Earth could be the envy of alien civilizations." +
    "We have forests that are enormous, cities that showcase our technologies," +
    "oceans that are insanely deep and have mysteries that have yet to be" +
    "discovered.";

    let old_html = "Unlike most known planets, Earth can be known to be beautiful even at night," +
    "click the button below to view our planet at night...<br> <br>" +
    "<button class='btn_night' onclick='window.change_to_night_earth()'> Night Time </button>";

    gsap.timeline()
    .to(".text_info_box_earth_two", {
        opacity: 0
    })   
    .to(".text_info_box_earth_one", {
        opacity: 0
    })
    .to(".earth_container", {
        opacity: 0
    })
    .set(".earth_container", {
        backgroundImage: "url('earth surface.jpg')",
        backgroundSize: "cover"
    })
    .set(".text_info_box_earth_one", {
        innerHTML: oldHTML,
        attr: {class: "text_containers_green text_info_box_earth_one transitioning_fast"}
    })
    .set(".text_info_box_earth_two", {
        innerHTML: old_html,
        attr: {class: "text_containers_blue text_info_box_earth_two transitioning_fast"}
    })
    .to(".earth_container", {
        opacity: 1
    })
    .to(".text_info_box_earth_one", {
        opacity: 1
    })
    .to(".text_info_box_earth_two", {
        opacity: 1
    })

}

 export function mars_file_animation() {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".mars_container_animation",
            start: "-10% 0",
            end: "-10% 0",
            markers: false
        }
    })
    .to(".mars_planet", {
        width: "+=2500",
        height: "+=2500",
        duration: 2
    })
    .set(".mars_container_animation", {
        backgroundImage: "url('mars surface.png')",
        backgroundSize: "cover"
    })
    .to(".mars_planet", {
        opacity: 0,
        zIndex: -1
    })
    .from(".text_box_mars_one", {
        opacity: 0
    })
    .from(".text_box_mars_two", {
        opacity: 0
    })
}

 export function change_to_night_mars() {
    let newHTML = "So this is it, the mars surface at night " +
    "the surface has a certain type of red glow that cover " +
    "all of the rocks and mountains";

    let new_HTML = "If you are tired of looking at the night sky " +
    "of mars, click the button below to go back to the day time of mars" +
    "<br><br>" + "<button class='btn_day' onclick='window.change_to_day_mars()'> Click here </button>"

    gsap.timeline()
    .to(".text_box_mars_one", {
        opacity: 0
    })
    .to(".text_box_mars_two", {
        opacity: 0
    })
    .to(".mars_container_animation", {
        opacity: 0
    })
    .set(".mars_container_animation", {
        backgroundImage: "url('mars surface at night.jpg')",
        backgroundSize: "cover"
    })
    .set(".text_box_mars_one", {
        innerHTML: newHTML,
        attr: {class: "text_containers_white text_box_mars_one transition_fast"}
    })
    .set(".text_box_mars_two", {
        innerHTML: new_HTML,
        attr: {class: "text_containers_white text_box_mars_two transition_fast"}
    })
    .to(".mars_container_animation", {
        opacity: 1
    })
    .to(".text_box_mars_one", {
        opacity: 1
    })
    .to(".text_box_mars_two", {
        opacity: 1
    })
}

 export function change_to_day_mars() {
    let newHTML =  "Just look at this place, a barren red desert that can't sustain water, " +
    "It's hard to believe that this planet once had water in its distant " +
    "past. As the planet is now, humans cannot survive in this cold wasteland..";

    let new_HTML = "The temperatures of this planet fall far below 0 degrees farhenheit. Even " +
    "during the day time, the planet has freezing temperatures. But it's even " +
    "worse at night. Click the button below to see how Mars looks like at night<br><br>" +
    "<button class='btn_night' onclick='window.change_to_night_mars()'>Click here </button>";

    gsap.timeline()
    .to(".text_box_mars_one", {
        opacity: 0
    })
    .to(".text_box_mars_two", {
        opacity: 0
    })
    .to(".mars_container_animation", {
        opacity: 0
    })
    .set(".mars_container_animation", {
        backgroundImage: "url('mars surface.png')",
        backgroundSize: "cover"
    })
    .set(".text_box_mars_one", {
        innerHTML: newHTML,
        attr: {class: "text_containers_neon_red text_box_mars_one transition_fast"}
    })
    .set(".text_box_mars_two", {
        innerHTML: new_HTML,
        attr: {class: "text_containers_neon_red text_box_mars_two transition_fast"}
    })
    .to(".mars_container_animation", {
        opacity: 1
    })    
    .to(".text_box_mars_one", {
        opacity: 1
    })
    .to(".text_box_mars_two", {
        opacity: 1
    })

}

 export function jupiter_file_animation() {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".jupiter_animation",
            start: "0% 0%",
            end: "0% 0%",
            markers: false
        }
    })
    .to(".jupiter_planet", {
        width: "+=2500",
        height: "+=2500",
        duration: 2
    })
    .set(".jupiter_animation", {
        backgroundImage: "url('jupiter surface.png')",
        backgroundSize: "cover"
    })
    .to(".jupiter_planet", {
        opacity: 0
    })
    .from(".text_box_jupiter_one", {
        opacity: 0
    })
    .from(".text_box_jupiter_two", {
        opacity: 0
    });
}

 export function change_jupiter_angle() {
    let newHTML = "Jupiter is truly a magnificent planet of gases. " +
    "If it were possible for us to stand on one of its moons, the " +
    "planet would look similarly to what you see in this image";

    let new_HTML = "Click the button below to go back to the surface of " +
    "jupiter." + "<br><br>" + "<button class='btn_jupiter' " + 
    "onclick='window.change_jupiter_back()'> " + "Click Here </button>";

    gsap.timeline()
    .to(".text_box_jupiter_one", {
        opacity: 0
    })
    .to(".text_box_jupiter_two", {
        opacity: 0
    })
    .to(".jupiter_animation", {
        opacity: 0
    })
    .set(".jupiter_animation", {
        backgroundImage: "url('side of jupiter.jpg')",
        backgroundSize: "cover"
    })
    .set(".text_box_jupiter_one", {
        innerHTML: newHTML
    })
    .set(".text_box_jupiter_two", {
        innerHTML: new_HTML
    })
    .to(".jupiter_animation", {
        opacity: 1
    })    
    .to(".text_box_jupiter_one", {
        opacity: 1
    })
    .to(".text_box_jupiter_two", {
        opacity: 1
    })
}

 export function change_jupiter_back() {
    let newHTML = "Jupiter will probably not be as pretty as this picture here, " +
    "but it's a close representation. The planet has winds that can " +
    "easily destroy any known life form. Jupiters gases are also toxic " +
    "to us, so traveling to this planet might just be a pipe dream.";

    let new_HTML = "Click the button below to look at jupiter at a different angle<br><br>" +
    "<button class='btn_jupiter' onclick='window.change_jupiter_angle()'>Click Here</button>"

    gsap.timeline()
    .to(".text_box_jupiter_one", {
        opacity: 0
    })
    .to(".text_box_jupiter_two", {
        opacity: 0
    })
    .to(".jupiter_animation", {
        opacity: 0
    })
    .set(".jupiter_animation", {
        backgroundImage: "url('jupiter surface.png')",
        backgroundSize: "cover"
    })
    .set(".text_box_jupiter_one", {
        innerHTML: newHTML
    })
    .set(".text_box_jupiter_two", {
        innerHTML: new_HTML
    })
    .to(".jupiter_animation", {
        opacity: 1
    })    
    .to(".text_box_jupiter_one", {
        opacity: 1
    })
    .to(".text_box_jupiter_two", {
        opacity: 1
    })
}

 export function saturn_file_animation() {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".saturn_animation",
            start: "0% 0%",
            end: "0% 0%",
            markers: false
        }
    })
    .to(".saturn_planet", {
        width: "+=4500",
        height: "+=4500",
        duration: 2
    })
    .set(".saturn_animation", {
        backgroundImage: "url('saturn surface.jpg')",
        backgroundSize: "cover"
    })
    .to(".saturn_planet", {
        opacity: 0,
    })
    .from(".text_box_saturn_one", {
        opacity: 0
    })
    .from(".text_box_saturn_two", {
        opacity: 0
    })
}

 export function view_saturn_rings() {
    let new_HTML = "The rings of saturn are filed with chunks " +
    "of ice and other debris. The planet's moons also orbit on these " +
    "rings";

    let newHTML = "Click the button below to go back to the surface of saturn " +
    "<br><br>" + "<button class='btn_saturn' " + "onclick='window.change_back_to_saturn_surface()'> " +
    "Click here </button>";

    gsap.timeline()
    .to(".text_box_saturn_one", {
        opacity: 0
    })
    .to(".text_box_saturn_two", {
        opacity: 0
    })
    .to(".saturn_planet", {
        opacity: 1
    })    
    .set(".saturn_animation", {
        backgroundImage: "",
        backgroundSize: ""
    })
    .to(".saturn_planet", {
        width: "-=4500",
        height: "-=4500",
        duration: 2
    })
    .to(".saturn_planet", {
        width: "+=4500",
        height: "+=4500",
        x: "+=1400",
        duration: 1.4
    })
    .to(".saturn_animation", {
        backgroundImage: "url('saturn rings.png')",
        backgroundSize: "cover",
    })    
    .set(".text_box_saturn_one", {
        innerHTML: new_HTML
    })
    .set(".text_box_saturn_two", {
        innerHTML: newHTML
    })
    .to(".saturn_planet", {
        opacity: 0,
        duration: 1,
    })
    .set(".saturn_planet", {
        attr: {src: ""}
    })
    .to(".text_box_saturn_one", {
        opacity: 1
    })
    .to(".text_box_saturn_two", {
        opacity: 1
    });
}

 export function change_back_to_saturn_surface() {
    let newHTML = "The surface of Saturn is probably a bit similar to Jupiters. " +
    "Gases and winds travelling in all different directions. It's very " +
    "unlikely that life can exist in such a violent enviroment.";

    let new_HTML = "Click the button below to view the rings of saturn<br><br> " +
    "<button class='btn_saturn' onclick='window.view_saturn_rings()'> Click here </button>"

    gsap.timeline()
    .to(".text_box_saturn_one", {
        opacity: 0
    })
    .to(".text_box_saturn_two", {
        opacity: 0
    })
    .set(".saturn_planet", {
        attr: {src: "saturn planet.png"}
    })
    .to(".saturn_planet", {
        opacity: 1
    })    
    .set(".saturn_animation", {
        backgroundImage: "",
        backgroundSize: ""
    })
    .to(".saturn_planet", {
        width: "-=4500",
        height: "-=4500",
        x: "-50",
        duration: 1.5
    })
    .to(".saturn_planet", {
        width: "+=4500",
        height: "+=4500",
        duration: 1.5
    })
    .to(".saturn_animation", {
        backgroundImage: "url('saturn surface.jpg')",
        backgroundSize: "cover"
    })
    .set(".text_box_saturn_one", {
        innerHTML: newHTML
    })
    .set(".text_box_saturn_two", {
        innerHTML: new_HTML
    })
    .to(".saturn_planet", {
        opacity: 0
    })
    .to(".text_box_saturn_one", {
        opacity: 1
    })
    .to(".text_box_saturn_two", {
        opacity: 1
    })
}

 export function uranus_file_animation() {
    gsap.timeline({
        scrollTrigger : {
            trigger: ".uranus_animation",
            start: "0% 0%",
            end: "0% 0%",
            markers: false
        }
    })
    .to(".uranus_planet", {
        width: "+=2000",
        height: "+=4000",
        duration: 2.4
    })
    .set(".uranus_animation", {
        backgroundImage: "url('uranus surface.png')",
        backgroundSize: "cover"
    })
    .to(".uranus_planet", {
        opacity: 0
    })
    .from(".text_box_uranus_one", {
        opacity: 0
    })
    .from(".text_box_uranus_two", {
        opacity: 0
    });
}

 export function view_uranus_rings() {
    let newHTML = "These are the rings of Uranus. " +
    "they are not as beautiful as Saturns, but they " + 
    "are still nice";

    let new_HTML = "Click the button below to go back to the " +
    "surface of Uranus" + "<br><br>" +"<button class='btn_uranus' " + 
    "onclick='window.change_back_to_uranus_surface()'> Click here </button>";

    gsap.timeline()
    .to(".text_box_uranus_one", {
        opacity: 0,
        innerHTML: newHTML
    })
    .to(".text_box_uranus_two", {
        opacity: 0,
        innerHTML: new_HTML
    })
    .set(".uranus_planet", {
        attr: {src: "uranus.png"}
    })
    .to(".uranus_planet", {
        opacity: 1,
    })    
    .to(".uranus_animation",{
        backgroundImage: ""
    }) 
    .to(".uranus_planet", {
        width: "-=2000",
        height: "-=4000",
        duration: 1.5
    }) 
    .to(".uranus_planet", {
        width: "+=2000",
        height: "+=4000",
        y: 1800,
        x: 500,
        duration: 1.5
    })
    .set(".uranus_animation", {
        backgroundImage: "url('uranus rings.png')",
        backgroundSize: "cover",
    })    
    .to(".uranus_planet", {
        opacity: 0,
        duration: 1               
    })                                  
    .set(".uranus_planet", {
        attr: {src: ""}                 //the expanded size of the image was causing undefined behavior when i was resizing the viewport
    })                                  //removing the src attribute seemed to fix the problem
    .to(".text_box_uranus_one", {
        opacity: 1
    })
    .to(".text_box_uranus_two", {
        opacity: 1
    })
}

 export function change_back_to_uranus_surface() {
    let newHTML = "So this is Uranus, one of the icy giants filled with gas " +
    "everywhere you go. It's very difficult to say if life can exist " +
    "in such a planet with extreme seasons.";

    let new_HTML = "Click the button below to take a look at uranus's rings <br><br>" +
    "<button class='btn_uranus' onclick='window.view_uranus_rings()'> Click here </button>";

    gsap.timeline()
    .to(".text_box_uranus_one", {
        opacity: 0
    })
    .to(".text_box_uranus_two", {
        opacity: 0
    })
    .set(".text_box_uranus_one", {
        innerHTML: newHTML
    })
    .set(".text_box_uranus_two", {
        innerHTML: new_HTML
    })    
    .set(".uranus_planet", {
        attr: {src: "uranus.png"}
    })
    .to(".uranus_planet", {
        opacity: 1
    })
    .set(".uranus_animation", {
        backgroundImage: ""
    })
    .to(".uranus_planet", {
        width: "-=2000",
        height: "-=4000",        
        y: 0,
        x: 0,
        duration: 1.5
    })
    .to(".uranus_planet", {
        width: "+=2000",
        height: "+=4000",
        duration: 1.5
    })
    .set(".uranus_animation", {
        backgroundImage: "url('uranus surface.jpg')",
        backgroundSize: "cover"
    })
    .to(".uranus_planet", {
        opacity: 0
    })
    .set(".uranus_planet", {
        attr: {src: ""}
    })
    .to(".text_box_uranus_one", {
        opacity: 1
    })
    .to(".text_box_uranus_two", {
        opacity: 1
    })
}

 export function neptune_file_animation() {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".neptune_animation",
            start: "0% 0%",
            end: "0% 0%",
            markers: false
        }
    })
    .to(".neptune_planet", {
        width: "+=2500",
        height: "+=2500",
        duration: 1.4
    })
    .set(".neptune_animation", {
        backgroundImage: "url('neptune surface.png')",
        backgroundSize: "cover"
    })
    .to(".neptune_planet", {
        opacity: 0
    })
    .set(".neptune_planet", {
        attr: {src: ""}
    })
    .from(".text_box_neptune_one", {
        opacity: 0
    })
    .from(".text_box_neptune_two", {
        opacity: 0
    })
}

 export function change_to_neptunes_moon() {
    let newHTML = "This is one of Neptunes moons; triton " +
    "it is expected to be barren with rocks everywhere. " +
    "This planet actually has a retrograde orbit, which makes " +
    "it the only moon to have such an orbit";

    let new_HTML = "Click the button below to go back to neptunes surface" +
    "<br><br>" + "<button class='btn_neptune' onclick='window.change_back_to_neptunes_surface()'> " + 
    "Click here </button>";

    gsap.timeline()
    .to(".text_box_neptune_one", {
        opacity: 0,
        innerHTML: newHTML
    })
    .to(".text_box_neptune_two", {
        opacity: 0,
        innerHTML: new_HTML
    })
    .to(".neptune_planet", {
        attr: {src: "neptune with moon.png"}
    })
    .to(".neptune_planet", {
        opacity: 1
    })
    .set(".neptune_animation", {
        backgroundImage: ""
    })
    .to(".neptune_planet", {
        width: "-=2500",
        height: "-=2500",
        duration: 1.4,
    })
    .to(".neptune_planet", {
        width: "+=4500",
        height: "+=4500",
        x: 1800,
        y: 1800,
        duration: 1.4
    })
    .set(".neptune_animation", {
        backgroundImage: "url('triton.png')",
        backgroundSize: "cover"
    })
    .to(".neptune_planet", {
        opacity: 0
    })
    .set(".neptune_planet", {
        attr: {src: ""}                                 //removing src attribute because .neptune_planet was causing window resizing bugs
    })
    .to(".text_box_neptune_one", {
        opacity: 1
    })
    .to(".text_box_neptune_two", {
        opacity: 1
    })
}

 export function change_back_to_neptunes_surface() {
    let newHTML = "The coldest planet in our solar system, Neptune. If you " +
    "love cold weather, then neptune is the perfect place for you. " + 
    "Just buy a home, set up a picnic and enjoy the weather!";
    let new_HTML = "Click the button below to look at one of Neptunes moons. <br><br> " +
    "<button class='btn_neptune' onclick='window.change_to_neptunes_moon()'> Click here " +
    "</button>";

    gsap.timeline()
    .to(".text_box_neptune_one", {
        opacity: 0,
        innerHTML: newHTML
    })
    .to(".text_box_neptune_two", {
        opacity: 0,
        innerHTML: new_HTML
    })
    .set(".neptune_planet", {
        attr: {src: "neptune with moon.png"}
    })
    .to(".neptune_planet", {
        opacity: 1
    })
    .set(".neptune_animation", {
        backgroundImage: ""
    })
    .to(".neptune_planet", {
        width: "-=4500",
        height: "-=4500",        
        x: 0,
        y: 0,
        duration: 1.4,
    })
    .to(".neptune_planet", {
        width: "+=2500",
        height: "+=2500",
        duration: 1.4
    })
    .set(".neptune_animation", {
        backgroundImage: "url('neptune surface.png')",
        backgroundSize: "cover"
    })
    .to(".neptune_planet", {
        opacity: 0
    })
    .to(".neptune_planet", {
        attr: {src: ""}
    })
    .to(".text_box_neptune_one", {
        opacity: 1
    })
    .to(".text_box_neptune_two", {
        opacity: 1
    })
}
