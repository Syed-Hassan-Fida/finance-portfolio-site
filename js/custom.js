
function reviewSlider() {
    return {
        currentIndex: 0,
        modalOpen: false,
        selectedReview: null,
        touchStartX: 0,
        reviews: [
            {
                name: 'Melody Maginnis',
                review: 'This company has changed my financial future. They shared products and programs that helped me get on track and reduce my debt significantly. Their resources were invaluable to me...',
                image: './assets/avatar.png',
                rating: 5
            },
            {
                name: 'Chris Johnson',
                review: 'My wife and I learned how to get out of more than 30k in debt. The team provided us with resources that we could use to improve our credit scores and manage our finances better.',
                image: './assets/avatar.png',
                rating: 5
            },
            {
                name: 'Satira Haynes',
                review: 'I had an incredible client experience! So grateful for the information provided, they really helped me understand my financial situation and guided me to financial freedom!',
                image: './assets/avatar.png',
                rating: 5
            },
            {
                name: 'Chelsey Zafft',
                review: 'The Miliere Group didn’t just help me secure my future— they actually took the time to explain all the steps, answer questions, and ensured I understood everything before making any decisions.',
                image: './assets/avatar.png',
                rating: 5
            },
            {
                name: 'Ricoyo Lyles',
                review: 'Outstanding experience with The Miliere Group — professional, honest, and client-focused. They provided great tools and support that helped me secure my financial future.',
                image: './assets/avatar.png',
                rating: 5
            },
            {
                name: 'Lynn',
                review: 'My experience with the Miliere Group has been incredible. They offered great advice and insights, giving me the tools I needed to take control of my financial future.',
                image: './assets/avatar.png',
                rating: 5
            },
            {
                name: 'John Doe',
                review: 'They helped me get back on track financially. I am so thankful for their guidance and support throughout my journey.',
                image: './assets/avatar.png',
                rating: 5
            },
            {
                name: 'Jane Smith',
                review: 'Excellent service, really worth it! They made it easy for me to understand my options and helped me make smart financial decisions.',
                image: './assets/avatar.png',
                rating: 5
            },
            {
                name: 'Robert Brown',
                review: 'I highly recommend them to anyone in need of financial help. Their expertise and genuine care for their clients set them apart from others.',
                image: './assets/avatar.png',
                rating: 5
            },
            {
                name: 'Emily Davis',
                review: 'The team is very professional and guided me every step of the way. I felt empowered to make my own financial decisions after working with them.',
                image: './assets/avatar.png',
                rating: 5
            },
            {
                name: 'Michael Green',
                review: 'Amazing service! Highly recommend it for families who want to take control of their financial future and need trusted advisors.',
                image: './assets/avatar.png',
                rating: 5
            }
        ],
        isMobile() {
            return window.innerWidth < 640; // Tailwind's sm breakpoint
        },
        visibleCards() {
            return this.isMobile() ? 1 : 5;
        },
        isVisible(index) {
            return index >= this.currentIndex && index < this.currentIndex + this.visibleCards();
        },
        next() {
            this.currentIndex = (this.currentIndex + 1) % (this.reviews.length - this.visibleCards() + 1);
        },
        prev() {
            this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % (this.reviews.length - this.visibleCards() + 1);
        },
        autoSlide() {
            setInterval(() => { this.next(); }, 5000);
        },
        startTouch(e) {
            this.touchStartX = e.changedTouches[0].screenX;
        },
        endTouch(e) {
            let diff = e.changedTouches[0].screenX - this.touchStartX;
            if (diff > 50) this.prev();
            if (diff < -50) this.next();
        },
        openModal(review) {
            this.selectedReview = review;
            this.modalOpen = true;
        },
        closeModal() {
            this.modalOpen = false;
            this.selectedReview = null;
        }
    }
}