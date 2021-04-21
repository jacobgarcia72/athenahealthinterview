import './ItemCard.css';

const ItemCard = ({repo, position}) => {
  return (
    <div className="item-card padding">
      <div>#{position}</div>
      <img src={repo.owner.avatar_url} alt={repo.name}/>
      <div className="name">{repo.name}</div>
      <div>@{repo.owner.login}</div>
      <div>{repo.stargazers_count} Stars</div>
    </div>
  )
}

export default ItemCard;