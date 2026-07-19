const introTiles = document.getElementById('icon-tiles');
const intro = document.getElementById('intro-animation');
const introPlayed = sessionStorage.getItem('introPlayed');

if (introPlayed && intro) {
	intro.remove();
}

if (introTiles) {
	const tiles = introTiles.querySelectorAll('.intro__tile');

	const columns = 6;

	const tileWidth = 61;
	const tileHeight = 63;

	// 1px Grid
	const gapX = 62;
	const gapY = 64;

	// Phase 0: Random
	tiles.forEach((tile) => {
		const randomX = Math.random() * (introTiles.clientWidth - tileWidth);
		const randomY = Math.random() * (introTiles.clientHeight - tileHeight);

		const rotate = Math.random() * 90 - 45;

		tile.style.left = `${randomX}px`;
		tile.style.top = `${randomY}px`;

		tile.style.transform = `rotate(${rotate}deg)`;
	});

	// Phase 1: Position
	setTimeout(() => {
		tiles.forEach((tile) => {
			const index = Number(tile.dataset.index);

			const x = index % columns;
			const y = Math.floor(index / columns);

			tile.style.left = `${x * gapX}px`;
			tile.style.top = `${y * gapY}px`;
		});
	}, 1200);

	// Phase 2: Rotate
	setTimeout(() => {
		tiles.forEach((tile) => {
			tile.style.transform = 'rotate(45deg)';
		});
	}, 2400);

	// Phase 3: Organized
	setTimeout(() => {
		tiles.forEach((tile) => {
			tile.style.transform = 'rotate(0deg)';
		});
	}, 3600);

	// Hide intro
	setTimeout(() => {
		if (intro) {
			intro.classList.add('hide');
			setTimeout(() => {
				sessionStorage.setItem('introPlayed', 'true');
			}, 1000);
		}
	}, 5000);

	// Clear intro played flag for debug
	// sessionStorage.removeItem('introPlayed');
}