import './Article.css';
import male from '../img/male.png';
import female from '../img/female.png';

function Article(props) {
    //let {title = "Заголовок статьи", content="Содержимое статьи"} = props; //деструктуризация
    let { db } = props;
    return (
        <article>

            <div className='profiles'>
                {

                    Object.keys(db).map(elem => {
                        return(
                            <div className='card' key={elem}>
                                <img src={db[elem].photo} alt="Photo" />
                                <div className='name'>Name: {db[elem].name} {db[elem].surname}</div>
                                <div className='gender'>Gender: <img src={db[elem].pol === 'male' ? male : female} alt="Gender" /></div>
                                <div className='age'>Age: {db[elem].age}</div>
                            </div>
                        )    
                    })
                }
                {/* <div className='card'>
                    <img src={db.photo} alt="Photo" />
                    <div className ='name'>{db.name} {db.surname}</div>
                    <div className ='gender'>
                        <img src={gender} alt="Gender" />
                    </div>
                    <div className='age'>{db.age}</div>
                </div> */}
            </div>


            <div>
                {/* <h1 style={{color:"red", fontSize:"32px"}}>{title}</h1>
            {content} */}
                {/* <h2>
                    Современные десктопные процессоры архитектуры x86
                    общие принципы работы (x86 CPU digest 2.0)
                </h2>
                <p>
                    Этот материал представляет собой обновлённую, существенно переработанную и дополненную версию статьи 2006 года, которая называлась «Современные десктопные процессоры архитектуры x86: общие принципы работы (x86 CPU FAQ 1.0)». Правда, чтобы не вводить потенциальных читателей в заблуждение словом «FAQ», мы решили назвать новый материал более правильным, как нам кажется, термином — «дайджест». Действительно, ведь большая его часть — это не ответы на конкретные вопросы, а разъяснения и краткие выжимки из чего угодно — от технической документации до истории развития микропроцессорной отрасли. Для кого предназначен данный материал? Нам видятся две группы потенциальных читателей.
                </p>
                <p>
                    <em>Первая</em> — это те, кто вдруг обнаружил, что ему действительно интересно узнать, как работает современный x86-процессор. Для них мы попытались сосредоточить в рамках статьи максимальное количество полезных сведений, которые позволяют получить более-менее полное представление об этом процессе, даже не имея до этого (почти) никаких специальных знаний: здесь объясняется значение основных терминов, устройство современных CPU, принципы взаимодействия различных их составляющих между собой, а также процессора с компьютерной системой в целом.
                </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse veritatis quisquam consequatur? Dolor animi rem excepturi at repellendus. Similique porro facilis, officiis architecto illum modi repudiandae asperiores provident corrupti eveniet.</p> */}
            </div>


        </article>
    )
}

Article.defaultProps = {
    title: 'Заголовок статьи',
    content: 'Содержимое статьи'
};

export default Article