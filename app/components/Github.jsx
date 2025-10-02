import React, { useEffect, useState } from 'react';

const Github = ({ username = 'gloze-png', repoLimit = 3 }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
       const response = await fetch(`https://api.github.com/users/gloze-png/repos?sort=pushed`);
        if (!response.ok) throw new Error('GitHub API error');
        const data = await response.json();
        const filtered = data.filter(repo => !repo.fork).slice(0, repoLimit);
        setRepos(filtered);
      } catch (error) {
        console.error('Error fetching repos:', error);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, [username, repoLimit]);

  return (
    <div id='work' className="w-full px-[12%] py-10 scroll-mt-20">
       <h2 className='text-center text-5xl font-[var(--font-ovo)] px-5'>Latest GitHub Projects</h2>
       <div className='text-center mb-10 mt-2 text-lg font-ovo'>Check out some of my recent work on GitHub.</div>

      {loading ? (
        <p className="bg-gray-500 rounded-lg p-10 flex justify-center items-center text-white">Loading...</p>
      ) : repos.length === 0 ? (
        <p className="text-black text-center">No repositories found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {repos.map(repo => (
    <a
      key={repo.id}
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-blue-200
                hover:-translate-y-1 duration-700 "
    >
      <h3 className="text-lg font-semibold text-white-400 mb-2">{repo.name}</h3>
      <p className="text-sm text-black">
        {repo.description || 'No description'}
      </p>
      <p className="text-xs mt-4 text-black">
        Last pushed: {new Date(repo.pushed_at).toLocaleString()}
      </p>
    </a>
  ))}
</div>

      )}
    </div>
  );
};

export default Github;

