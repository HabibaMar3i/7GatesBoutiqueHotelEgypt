export default function Logo({ className = "w-12 h-12", textClassName = "text-lg" }) {
    return (
        <div className="flex items-center gap-3">
            {/* Logo Icon - 7 Gates Symbol matching the image */}
            <div className={`${className} flex flex-col justify-center items-center text-brand-400`}>
                <svg viewBox="0 0 60 60" className="w-full h-full" fill="currentColor">
                    {/* Outer gate */}
                    <rect x="8" y="15" width="44" height="3" fill="currentColor"/>
                    <rect x="8" y="15" width="3" height="30" fill="currentColor"/>
                    <rect x="49" y="15" width="3" height="30" fill="currentColor"/>
                    
                    {/* Second gate */}
                    <rect x="12" y="19" width="36" height="2.5" fill="currentColor"/>
                    <rect x="12" y="19" width="2.5" height="26" fill="currentColor"/>
                    <rect x="45.5" y="19" width="2.5" height="26" fill="currentColor"/>
                    
                    {/* Third gate */}
                    <rect x="16" y="23" width="28" height="2" fill="currentColor"/>
                    <rect x="16" y="23" width="2" height="22" fill="currentColor"/>
                    <rect x="42" y="23" width="2" height="22" fill="currentColor"/>
                    
                    {/* Fourth gate */}
                    <rect x="20" y="27" width="20" height="1.5" fill="currentColor"/>
                    <rect x="20" y="27" width="1.5" height="18" fill="currentColor"/>
                    <rect x="38.5" y="27" width="1.5" height="18" fill="currentColor"/>
                    
                    {/* Fifth gate */}
                    <rect x="24" y="31" width="12" height="1" fill="currentColor"/>
                    <rect x="24" y="31" width="1" height="14" fill="currentColor"/>
                    <rect x="35" y="31" width="1" height="14" fill="currentColor"/>
                    
                    {/* Sixth gate */}
                    <rect x="27" y="35" width="6" height="0.8" fill="currentColor"/>
                    <rect x="27" y="35" width="0.8" height="10" fill="currentColor"/>
                    <rect x="32.2" y="35" width="0.8" height="10" fill="currentColor"/>
                    
                    {/* Seventh (innermost) gate */}
                    <rect x="29" y="39" width="2" height="0.6" fill="currentColor"/>
                    <rect x="29" y="39" width="0.6" height="6" fill="currentColor"/>
                    <rect x="30.4" y="39" width="0.6" height="6" fill="currentColor"/>
                </svg>
            </div>
            
            {/* Text */}
            <div className="flex flex-col">
                <span className={`${textClassName} font-bold text-brand-300 tracking-wider`}>
                    7 GATES
                </span>
                <span className="text-xs text-brand-300/80 tracking-widest">
                    BOUTIQUE HOTEL EGYPT
                </span>
            </div>
        </div>
    );
}