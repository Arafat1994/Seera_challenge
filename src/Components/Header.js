
import './Header.scss'

export default function Header({header}) {

    return (
        <div className="SearchCaption">
            <p className="CaptionText"> {header}  </p>
        </div>
    )
}