export default function Footer() {
  return (
    <footer className='w-full px-8 py-6 text-center text-sm text-gray-500 dark:text-gray-400'>
      <p>
        © {new Date().getFullYear()} Leonardo Guanuco. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}
