type Props = {
    onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
    onChange: (immatriculation: string) => void;
    immatriculation: string;
    loading: boolean;
    error: string | null;
}

export default function Form({ onSubmit, onChange, immatriculation, loading, error }: Props) {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="immatriculation">Immatriculation</label>
            <input 
                type="text" 
                id="immatriculation"
                onChange={(e) => onChange(e.target.value)}
                value={immatriculation}
            />
            <button 
                type="submit"
                disabled={loading}
            >
                {loading ? "Loading..." : "Drop"}
            </button>
            {error && (
                <div>
                    Error : {error}
                </div>
            )}
        </form>
    )
}