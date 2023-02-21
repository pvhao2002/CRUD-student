// const fs = require('fs');
try {
    const timeDiv = document.getElementById("current-time"); // Lấy thẻ div theo id
    function displayTime() {
        const now = new Date(); // Lấy thời gian hiện tại
        const timeString = now.toLocaleTimeString(); // Định dạng thời gian thành chuỗi
        timeDiv.innerHTML = timeString; // Gán chuỗi thời gian vào nội dung của thẻ div
    }

    displayTime(); // Gọi hàm để hiển thị thời gian ban đầu
    setInterval(displayTime, 1000); // Tự động cập nhật thời gian sau mỗi 1 giây
} catch (error) {
    console.log(`Error: ${error}`);
}

try {
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop()) {
                $('header').addClass('sticky');
            } else {
                $('header').removeClass('sticky');
            }
        })
    })
} catch (error) {
    console.log(`Error: ${error}`);
}


