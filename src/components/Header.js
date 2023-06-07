import Link from "next/link";

export function Header() {
    return(
        <div className="navbar bg-slate-900">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-white">AtariGamePass</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="text-white"><Link href="/favoritos">Favoritos</Link></li>
            <li className="text-white"><Link href="/addgame">Agregar juegos</Link></li>
            <li className="text-white"><Link href="/perfil">Perfil</Link></li>
          </ul>
        </div>
      </div>
    )
}