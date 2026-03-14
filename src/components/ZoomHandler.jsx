import { ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons'

const ZoomHandler = ({ settings, setSettings, className }) => {
  const zoom = settings.zoom.value;

  const zoomLevels = [...new Set(
    [0.25, 0.5, 0.75, 0.85, 0.95, ...Array.from({ length: 10 }, (_, i) => (i + 1) * 0.1)]
      .map((v) => parseFloat(v.toFixed(2)))
  )].sort((a, b) => a - b);

  const setZoom = (updater) =>
    setSettings((prev) => ({
      ...prev,
      zoom: { ...prev.zoom, value: typeof updater === "function" ? updater(prev.zoom.value) : updater },
    }));

  const stepZoom = (direction) => {
    const currentIndex = zoomLevels.findIndex((v) => v === zoom);
    const nextIndex = currentIndex + direction;
    if (nextIndex >= 0 && nextIndex < zoomLevels.length) {
      setZoom(zoomLevels[nextIndex]);
    }
  };

  const atMin = zoom <= zoomLevels[0];
  const atMax = zoom >= zoomLevels[zoomLevels.length - 1];

  return (
    <div className={`flex items-center gap-2 text-gray-800 ${className}`}>
      <button
        className={`active:scale-90 transition-all cursor-pointer ${atMin && "pointer-events-none opacity-40"}`}
        onClick={() => stepZoom(-1)}
      >
        <ZoomOutOutlined className="text-lg" />
      </button>
      <button
        className={`active:scale-90 transition-all cursor-pointer ${atMax && "pointer-events-none opacity-40"}`}
        onClick={() => stepZoom(1)}
      >
        <ZoomInOutlined className="text-lg" />
      </button>
      <select
        value={zoom}
        className="outline-0 w-16 h-6 p-0 border rounded-md border-gray-300 text-gray-800"
        onChange={(e) => setZoom(parseFloat(e.target.value))}
      >
        {zoomLevels.map((v) => (
          <option key={v} value={v}>{Math.round(v * 100)}%</option>
        ))}
      </select>
    </div>
  );
};

export default ZoomHandler;