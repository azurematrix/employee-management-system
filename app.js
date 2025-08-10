document.querySelectorAll('.sidebar-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Bỏ class active khỏi tất cả link
        document.querySelectorAll('.sidebar-menu a')
            .forEach(item => item.classList.remove('active'));
        
        // Thêm class active cho link vừa click
        this.classList.add('active');

        // Lấy tên tab
        const tabName = this.dataset.tab;

        // Ẩn tất cả tab content
        document.querySelectorAll('.tab-content')
            .forEach(tab => tab.classList.remove('active'));

        // Hiện tab được chọn
        const targetTab = document.getElementById(tabName + 'Tab');
        if (targetTab) {
            targetTab.classList.add('active');
        }
    });
});
