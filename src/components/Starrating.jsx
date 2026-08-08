import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { supabase } from '../supabaseClient';

export const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [comment, setComment] = useState('');
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (rating === 0) return;

        setStatus('sending');

        const { error } = await supabase
            .from('ratings')
            .insert([{ rating, comment: comment.trim() || null }]);

        if (error) {
            console.error(error);
            setStatus('error');
            return;
        }

        setStatus('sent');
    };

    if (status === 'sent') {
        return (
            <div>
                <h3 className="mb-4 font-semibold text-white">Merci !</h3>
                <p className="text-sm text-gray-400">
                    Ta note a bien été envoyée. J'apprécie ton retour 
                </p>
            </div>
        );
    }

    return (
        <div>
            <h3 className="mb-4 font-semibold text-white">Note mon travail</h3>
            <p className="mb-4 text-sm text-gray-400">
                Donne-moi ton avis en quelques secondes
            </p>

            <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="transition"
                            aria-label={`${star} étoile${star > 1 ? 's' : ''}`}
                        >
                            <FaStar
                                className={`h-6 w-6 ${
                                    star <= (hoverRating || rating)
                                        ? 'text-yellow-400'
                                        : 'text-gray-700'
                                }`}
                            />
                        </button>
                    ))}
                </div>

                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Un commentaire ? (optionnel)"
                    rows={2}
                    className="w-full resize-none rounded-lg bg-slate-900 px-4 py-2 text-sm text-white placeholder-gray-500 outline-none transition focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    disabled={rating === 0 || status === 'sending'}
                    className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:shadow-lg hover:shadow-blue-500/50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    {status === 'sending' ? 'Envoi...' : 'Envoyer ma note'}
                </button>

                {status === 'error' && (
                    <p className="text-xs text-red-400">
                        Une erreur est survenue, réessaie.
                    </p>
                )}
            </form>
        </div>
    );
};