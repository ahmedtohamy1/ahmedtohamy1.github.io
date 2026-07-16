import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Github, Linkedin, Mail, Download, Wifi, WifiOff, RefreshCw, AlertTriangle, Cpu, Database, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroStats, highlightBadges, siteMeta } from "@/data/site";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

const Hero = () => {
  // Telemetry Simulator States
  const [isConnected, setIsConnected] = useState(true);
  const [telemetryRate, setTelemetryRate] = useState(10); // Hz
  const [packetsSent, setPacketsSent] = useState(1420);
  const [cpuLoad, setCpuLoad] = useState(12);
  const [points, setPoints] = useState<number[]>([40, 45, 42, 50, 48, 55, 60, 52, 48, 42, 38, 45, 52, 58, 62, 55, 48, 52, 56, 60]);
  const [blocState, setBlocState] = useState("TelemetryStreaming");

  // Latency & Telemetry generation
  useEffect(() => {
    if (!isConnected) {
      setBlocState("TelemetryPaused");
      return;
    }
    setBlocState("TelemetryStreaming");

    const interval = setInterval(() => {
      // Simulate telemetry chart points
      setPoints((prev) => {
        const last = prev[prev.length - 1];
        const change = (Math.random() - 0.5) * 16;
        const next = Math.max(10, Math.min(90, last + change));
        return [...prev.slice(1), next];
      });

      // Increment packet counter
      setPacketsSent((p) => p + 1);

      // Fluctuate CPU load
      setCpuLoad((c) => {
        const change = (Math.random() - 0.5) * 4;
        return Math.max(4, Math.min(35, Math.round(c + change)));
      });
    }, 1000 / telemetryRate);

    return () => clearInterval(interval);
  }, [isConnected, telemetryRate]);

  // Generate SVG path for telemetry graph
  const width = 320;
  const height = 110;
  const step = width / (points.length - 1);
  const pathData = points
    .map((val, idx) => {
      const x = idx * step;
      const y = height - (val / 100) * height;
      return `${idx === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");

  const areaData = `${pathData} L ${width} ${height} L 0 ${height} Z`;

  const handleAlertTrigger = () => {
    if (!isConnected) {
      toast.error("Cannot trigger alert: MQTT stream is disconnected.");
      return;
    }
    setBlocState("TelemetryWarningState");
    toast.warning("Simulated Telemetry Alert dispatched to mqtt.motoboxapp.com", {
      description: "Sensor temperature exceeded threshold limit (85°C).",
      duration: 4000,
    });
    setTimeout(() => {
      if (isConnected) setBlocState("TelemetryStreaming");
    }, 4000);
  };

  const handleConnectionToggle = () => {
    setIsConnected(!isConnected);
    toast.info(isConnected ? "MQTT Telemetry connection terminated." : "MQTT Telemetry re-established.", {
      description: isConnected 
        ? "Flutter BLoC state set to TelemetryDisconnected." 
        : "Re-authenticating JWT & streaming from endpoint.",
    });
  };

  // Card Mouse Hover Glow tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    let rect = card.dataset.rect ? JSON.parse(card.dataset.rect) : null;
    
    if (!rect) {
      const r = card.getBoundingClientRect();
      rect = { left: r.left, top: r.top };
      card.dataset.rect = JSON.stringify(rect);
      
      const clearCache = () => {
        delete card.dataset.rect;
        card.removeEventListener("mouseleave", clearCache);
      };
      card.addEventListener("mouseleave", clearCache);
    }

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="relative isolate overflow-hidden px-4 pt-28 pb-20">
      {/* Background Mesh Gradient Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] left-[20%] h-[600px] w-[600px] rounded-full bg-primary/20 blur-[130px] animate-pulse duration-[8000ms]" />
        <div className="absolute top-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute -bottom-[20%] left-[10%] h-[550px] w-[550px] rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        
        {/* Left Column: Typographic Details */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary backdrop-blur-sm filter drop-shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {siteMeta.availability}
          </div>

          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.55em] text-primary/80">Premium Flutter Architectures</p>
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-sans">
                {siteMeta.name.split(" ")[0]} <span className="gradient-text">{siteMeta.name.split(" ").slice(1).join(" ")}</span>
              </h1>
              <p className="text-xl font-medium text-muted-foreground md:text-2xl">{siteMeta.role}</p>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground/90 md:text-xl font-light">{siteMeta.headline}</p>
          </div>

          {/* Quick stats pills */}
          <div className="grid grid-cols-3 gap-4 border border-border/50 bg-card/40 p-4 rounded-3xl backdrop-blur-sm">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center space-y-1">
                <p className="text-2xl md:text-3xl font-extrabold text-primary">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="group gap-2.5 rounded-full px-6 py-6 text-base font-semibold shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.02] transition-all">
              <a href="#contact">
                <Mail className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
                Book a Discovery Call
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2.5 rounded-full border-primary/25 bg-background/50 hover:bg-primary/5 px-6 py-6 text-base font-semibold hover:border-primary/60 transition-all hover:scale-[1.02]"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5" />
                Resume.pdf
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="gap-2 rounded-full text-muted-foreground hover:text-primary px-5 py-6 text-base hover:bg-transparent"
            >
              <a href="#projects" className="group">
                <FileText className="h-5 w-5 inline mr-1 group-hover:text-primary" />
                View Selected Work
              </a>
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-2">
            {[Github, Linkedin, Mail].map((Icon, index) => {
              const href =
                Icon === Mail 
                  ? "mailto:1ahmed.tohamy@gmail.com" 
                  : Icon === Github 
                    ? "https://github.com/ahmedtohamy1" 
                    : "https://linkedin.com/in/1ahmedtohamy";
              return (
                <Button
                  key={Icon.displayName ?? index}
                  asChild
                  size="icon"
                  variant="outline"
                  className="h-11 w-11 rounded-full border-border bg-card/65 text-foreground/70 transition-all hover:border-primary/40 hover:text-primary hover:scale-105"
                >
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              );
            })}
            <div className="h-px w-8 bg-border/80 mx-2" />
            <span className="text-xs text-muted-foreground tracking-wide font-medium">Responds in &lt; 24h</span>
          </div>
        </motion.div>

        {/* Right Column: Interactive simulated Flutter IoT Cockpit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:ml-4"
        >
          {/* Card Backing Glow */}
          <div className="absolute -inset-2 rounded-[34px] bg-gradient-to-tr from-primary/30 to-accent/20 blur-2xl opacity-80" />

          {/* Core Cockpit Container */}
          <div
            onMouseMove={handleMouseMove}
            className="card-glow relative rounded-[30px] border border-white/10 bg-black/40 backdrop-blur-2xl p-6 shadow-2xl shadow-black/40 flex flex-col gap-6"
          >
            {/* Header / Meta bar */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-destructive/70" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/70" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
                </div>
                <div className="h-4 w-px bg-white/10" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-bold font-mono">Flutter-IoT-Console v3.8</span>
              </div>
              
              {/* BLoC State Badge */}
              <div className="rounded-full bg-white/5 px-3 py-1 border border-white/10 flex items-center gap-1.5">
                <span className={`h-1.5 w-1.5 rounded-full ${
                  blocState === "TelemetryStreaming" 
                    ? "bg-emerald-500 shadow-[0_0_8px_hsl(141,80%,50%)]" 
                    : blocState === "TelemetryWarningState"
                      ? "bg-amber-500 animate-ping"
                      : "bg-red-500"
                }`} />
                <span className="text-[9px] font-mono text-white/80">{blocState}</span>
              </div>
            </div>

            {/* Metrics Widget Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-3.5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-white/40 font-semibold font-mono">Stream Quality</span>
                  <Database className="h-3.5 w-3.5 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-bold font-mono text-white">MQTT</p>
                  <p className="text-[10px] text-white/55 font-mono">mqtt.motoboxapp.com</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-3.5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-white/40 font-semibold font-mono">Telemetry Rate</span>
                  <Cpu className="h-3.5 w-3.5 text-accent" />
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="text-xl font-bold font-mono text-white">{telemetryRate} <span className="text-xs text-white/50">Hz</span></p>
                  <div className="flex gap-1">
                    <button 
                      onClick={() => setTelemetryRate(2)} 
                      className={`text-[8px] font-mono px-1.5 py-0.5 rounded ${telemetryRate === 2 ? "bg-primary text-white" : "bg-white/5 text-white/60"}`}
                    >2Hz</button>
                    <button 
                      onClick={() => setTelemetryRate(10)} 
                      className={`text-[8px] font-mono px-1.5 py-0.5 rounded ${telemetryRate === 10 ? "bg-primary text-white" : "bg-white/5 text-white/60"}`}
                    >10Hz</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Live Oscilating Graph */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-4 relative overflow-hidden flex flex-col gap-2">
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Live telemetry signal</span>
                  <span className="text-[9px] font-mono bg-primary/20 text-primary border border-primary/20 px-1 rounded">Channel A</span>
                </div>
                <div className="flex items-center gap-1 font-mono text-[9px] text-white/65">
                  <RefreshCw className={`h-3 w-3 text-white/50 mr-0.5 ${isConnected ? "animate-spin" : ""}`} />
                  {packetsSent} packets
                </div>
              </div>

              {/* Chart Plot Area */}
              <div className="relative h-28 w-full mt-2">
                {!isConnected ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 backdrop-blur-[1px] gap-2 rounded">
                    <WifiOff className="h-8 w-8 text-white/30" />
                    <p className="text-xs text-white/40 font-mono">MQTT Stream Paused</p>
                  </div>
                ) : null}

                <svg className="w-full h-full" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid lines */}
                  <line x1="0" y1="27" x2={width} y2="27" stroke="white" strokeOpacity="0.04" strokeDasharray="3" />
                  <line x1="0" y1="55" x2={width} y2="55" stroke="white" strokeOpacity="0.04" strokeDasharray="3" />
                  <line x1="0" y1="82" x2={width} y2="82" stroke="white" strokeOpacity="0.04" strokeDasharray="3" />

                  {/* Shaded Area */}
                  {isConnected && <path d={areaData} fill="url(#chartGradient)" />}

                  {/* Main Line */}
                  <path
                    d={pathData}
                    fill="none"
                    stroke={blocState === "TelemetryWarningState" ? "hsl(var(--destructive))" : "hsl(var(--primary))"}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300"
                  />
                </svg>
              </div>
            </div>

            {/* Sub-Ledger Panel */}
            <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4 text-center">
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-wider text-white/30 font-mono block">CPU Usage</span>
                <span className="text-sm font-semibold font-mono text-white/90">{cpuLoad}%</span>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-wider text-white/30 font-mono block">Temp Gauge</span>
                <span className="text-sm font-semibold font-mono text-white/90">{isConnected ? `${points[points.length-1] + 20}°C` : "--"}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-wider text-white/30 font-mono block">Network</span>
                <span className="text-sm font-semibold font-mono text-white/90">{isConnected ? "26 ms" : "offline"}</span>
              </div>
            </div>

            {/* Interactive Control buttons */}
            <div className="flex gap-2">
              <Button
                variant={isConnected ? "destructive" : "default"}
                size="sm"
                onClick={handleConnectionToggle}
                className="flex-1 rounded-xl text-xs gap-1.5"
              >
                {isConnected ? (
                  <>
                    <Pause className="h-3 w-3" /> Disconnect MQTT
                  </>
                ) : (
                  <>
                    <Play className="h-3 w-3" /> Stream Live MQTT
                  </>
                )}
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleAlertTrigger}
                className="border-white/10 bg-white/5 text-white/80 hover:bg-white/10 rounded-xl text-xs gap-1.5"
              >
                <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                Dispatch Alert
              </Button>
            </div>

            {/* Tech badges in dashboard */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
              {highlightBadges.slice(0, 4).map((badge) => (
                <span key={badge} className="text-[8px] bg-white/5 border border-white/10 rounded px-2 py-0.5 text-white/60 font-mono">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
