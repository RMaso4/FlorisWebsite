// src/app/components/GoogleMap.tsx
export default function GoogleMap() {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Locatie</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.2475484146547!2d5.987742776926801!3d51.19173237188276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c74b7a1b3e7a6d%3A0x9e3f5c1e5b9b9b9b!2sMinderbroederssingel%2010A%2C%206041%20KJ%20Roermond!5e0!3m2!1snl!2snl!4v1620000000000!5m2!1snl!2snl"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    );
  }