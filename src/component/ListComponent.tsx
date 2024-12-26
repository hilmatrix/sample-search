interface Props {
  name : string
  email : string
  profile_url : string
}

export default function ListComponent(props : Props) {
    return (
        <div className="flex gap-4">
            <img src={props.profile_url} width={50} height={50} className="gap-4"></img>
            <div className="flex flex-col">
                <strong>{props.name}</strong>
                <div>{props.email}</div>
            </div>
        </div>
    )
}