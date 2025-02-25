const imageImport = import.meta.glob('../../assets/images/Recruit/Competency/*.png', { eager: true });

export const images = Object.keys(imageImport).reduce((acc, key) => {
    const path = key.replace('../../assets/images/Recruit/Competency/', '').replace('.png', '');
    acc[path] = imageImport[key].default;
    return acc;
}, {});
