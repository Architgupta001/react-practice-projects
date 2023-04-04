

const Menu = ({menu})=>{
    return(
        <div className="section-center">
            {menu.map((menuItem)=>{
                const {id,title,price,image,desc} = menuItem;
                return(
                    <article key={id} className="menu-item">
                        <img src={image} alt={title} className="photo" />
                        {console.log(image)}
                        <div className="item-info">
                            <header>
                                <h4>{title}</h4>
                                <h4 className="price">${price}</h4>
                            </header>
                            <p className="item-text">{desc}</p>
                        </div>
                    </article>
                )
            })}
            
        </div>
    );
}

export default Menu