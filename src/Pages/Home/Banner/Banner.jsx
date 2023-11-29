

const Banner = () => {
    return (
        <div>
            <div className="hero  h-[600px]" style={{ backgroundImage: 'url(https://media.licdn.com/dms/image/D4D12AQEHllDjaTjlCA/article-cover_image-shrink_720_1280/0/1685687792530?e=2147483647&v=beta&t=t_X2Sl9pDvxsncGwjDwcKZGJrR6iMGB3vrKG6X_TwlU)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            {/* <img src="https://media.licdn.com/dms/image/D4D12AQEHllDjaTjlCA/article-cover_image-shrink_720_1280/0/1685687792530?e=2147483647&v=beta&t=t_X2Sl9pDvxsncGwjDwcKZGJrR6iMGB3vrKG6X_TwlU" alt="" /> */}

        </div>
    );
};

export default Banner;