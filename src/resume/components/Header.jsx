const Header = ({header}) => {
  if (!header) return null;
  return (
    <section className='flex flex-col items-center gap-px'>
        <h1 className={header.fullname.className}>
          {header.fullname.value}
        </h1>

        <div className="flex gap-4 text-sm">
          <p className={header.contacts.className}>{header.contacts.value}</p>
          <div className={header.links.className}>
            {header.links.items.map((item) => (
              <div key={item.label} className={item.className}>
                <item.icon />
                {
                  item.url && item.value ? <a className='font-medium' href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                    :
                    <p className="font-medium">{item.value}</p>
                }
              </div>
            ))
            }
          </div>
        </div>
      </section>
  )
}

export default Header