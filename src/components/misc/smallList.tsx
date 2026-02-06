export default function SmallLst({title, lst}:{title:string, lst:any}){
    return(
        <section className="home-focus">
          <h2>{title}</h2>
          <ul>
            {lst.map((item:string, i:number) => <li key={i}>{item}</li>)}
          </ul>
        </section>
    )
}