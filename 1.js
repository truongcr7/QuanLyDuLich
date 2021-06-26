var bg_video = document.querySelector('.bg-header .bg-video'),
    video = document.getElementById('video'),
    close_video = document.querySelector('.bg-video .close-video'),
    btn_play = document.querySelector('.bg-header .btn-play'),
    volume = document.getElementById('volume');

btn_play.addEventListener('click', function () {
    bg_video.classList.add('bg-video--appear');
    video.play();
});
video.addEventListener('ended', function () {
    bg_video.classList.remove('bg-video--appear');
});
close_video.addEventListener('click', function () {
    video.currentTime = 0;
    video.pause();
    bg_video.classList.remove('bg-video--appear');
});
volume.addEventListener('click', function () {
    volume.classList.toggle('volume-down');
    volume.classList.toggle('fa-volume-down');
    volume.classList.toggle('volume-off');
    volume.classList.toggle('fa-volume-off');
    if (volume.classList.contains('volume-off')) {
        video.muted = true;
    }
    else {
        video.muted = false;
    }
});

//end of header

var one_item = document.getElementsByClassName('one-item'),
    title_first = document.querySelector('.search-item .title .first');
title_second = document.querySelector('.search-item .title .second');
for (var i = 0; i < one_item.length; i++) {
    one_item[i].addEventListener('click', function () {
        for (var k = 0; k < one_item.length; k++)
            if (one_item[k].classList.contains('active'))
                one_item[k].classList.remove('active');
        this.classList.add('active');
        var elm = this, count = 0;
        while (elm = elm.previousElementSibling) {
            count++;
        }
        switch (count) {
            case 0: title_first.innerHTML = "TÌM ";
                title_second.innerHTML = "KHÁCH SẠN";
                break;
            case 1: title_first.innerHTML = "TÌM ";
                title_second.innerHTML = "TOURIS DU LỊCH";
                break;
            case 2: title_first.innerHTML = "TIẾN HÀNH ";
                title_second.innerHTML = "ĐẶT VÉ";
                break;
            case 3: title_first.innerHTML = "BẮT ĐẦU ";
                title_second.innerHTML = "THUÊ XE";
                break;
        }
    });
}

// end of all-item

var angle_down = document.querySelector('.place .fa-angle-down'),
    layer = document.querySelector('.place .layer'),
    _1row = document.getElementsByClassName('_1row'),
    place__name = document.querySelector('.place .place__name');

angle_down.addEventListener('click', function () {
    layer.classList.toggle('layer--appear');
});
for (var i = 0; i < _1row.length; i++) {
    _1row[i].addEventListener('click', function () {
        place__name.innerHTML = this.innerHTML;
        layer.classList.remove('layer--appear');
    });
}

//end of place

var time_to_go = document.querySelector('.info .time-to-go'),
    time_come_back = document.querySelector('.info .time-come-back');
time_to_go.addEventListener('click', function () {
    this.type = 'date';
    time_come_back.type = 'date';
    time_come_back.value = this.value;
});
time_come_back.addEventListener('click', function () {
    this.type = 'date';
    time_to_go.type = 'date';
});

// end of time-to-go and time-come-back

var info = document.querySelector('.search-item .info'),

    first_selection = document.querySelector('._2selection .first-selection'),
    second_selection = document.querySelector('._2selection .second-selection'),

    picture_ball1 = document.querySelector('._1picture .picture_ball1'),
    picture_ball2 = document.querySelector('._1picture .picture_ball2'),
    picture_ball3 = document.querySelector('._1picture .picture_ball3'),

    result1 = document.querySelector('.blurred .result1'),
    result2 = document.querySelector('.blurred .result2'),
    resutl3 = document.querySelector('.blurred .result3'),

    des1 = document.getElementsByClassName('des1'),
    des2 = document.getElementsByClassName('des2'),

    status_info = true,
    status_selection = true,
    status_ball = true,
    status_result = true,
    status_des = true;

window.addEventListener('scroll', function () {
    //status_info
    if (window.pageYOffset > 200) {
        if (status_info == true) {
            info.classList.add('go-up');
            status_info = false;
        }
    } else {
        if (status_info == false) {
            info.classList.remove('go-up');
            status_info = true;
        }
    }

    //status_selection
    if (window.pageYOffset > 1200) {
        if (status_selection == true) {
            first_selection.classList.add('go-from-left');
            second_selection.classList.add('go-from-right');
            status_selection = false;
        }
    } else {
        if (status_selection == false) {
            first_selection.classList.remove('go-from-left');
            second_selection.classList.remove('go-from-right');
            status_selection = true;
        }
    }

    //status_ball
    if (window.pageYOffset > 1900) {
        if (status_ball == true) {
            picture_ball1.classList.add('ani_ball1');
            picture_ball2.classList.add('ani_ball2');
            picture_ball3.classList.add('ani_ball3');
            status_ball = false;
        }
    } else {
        if (status_ball == false) {
            picture_ball1.classList.remove('ani_ball1');
            picture_ball2.classList.remove('ani_ball2');
            picture_ball3.classList.remove('ani_ball3');
            status_ball = true;
        }
    }

    //status_result
    if (window.pageYOffset > 2500) {
        if (status_result == true) {
            result1.classList.add('ani_result1');
            result2.classList.add('ani_result2');
            resutl3.classList.add('ani_result3');
            status_result = false;
        }
    } else {
        if (status_result == false) {
            result1.classList.remove('ani_result1');
            result2.classList.remove('ani_result2');
            resutl3.classList.remove('ani_result3');
            status_result = true;
        }
    }

    //status_activity
    var desNumber = des1.length;
    if (window.pageYOffset > 3000) {
        if (status_des == true) {
            for (var i = 0; i < desNumber; i++) {
                des1[i].classList.add('des-go-down');
                des2[i].classList.add('des-go-down');
            }
            status_des = false;
        }
    } else {
        if (status_des == false) {
            for (var i = 0; i < desNumber; i++) {
                des1[i].classList.remove('des-go-down');
                des2[i].classList.remove('des-go-down');
            }
            status_des = true;
        }
    }
});
//end of some status