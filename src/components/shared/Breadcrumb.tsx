import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="py-3 px-4 bg-zinc-900/50 border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-zinc-500" itemScope itemType="https://schema.org/BreadcrumbList">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-1"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {i > 0 && <span className="text-zinc-700">›</span>}
              {item.href ? (
                <Link
                  to={item.href}
                  className="hover:text-orange-400 transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span className="text-zinc-300" itemProp="name">{item.label}</span>
              )}
              <meta itemProp="position" content={String(i + 1)} />
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
